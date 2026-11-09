// Saves and loads a card. Storage is Upstash Redis (Vercel Marketplace), called over plain HTTPS, so there are no dependencies.
// If the database is not connected this returns 503 and the site falls back to long links that carry the card inside the URL.
const crypto = require('crypto');

const TTL = 60 * 60 * 24 * 365;      // keep cards for one year
const MAX_BYTES = 6000;               // a card is a few hundred bytes; this blocks abuse
const THEMES = ['holud', 'biye', 'bou', 'shada'];
const OPENS = ['none', 'bismillah', 'shubho'];
const EVK = ['holud', 'biye', 'bou'];
const ALPHABET = 'abcdefghjkmnpqrstuvwxyz23456789';

function creds() {
  const url = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;
  return url && token ? { url, token } : null;
}
async function redis(c, cmd) {
  const r = await fetch(c.url, {
    method: 'POST',
    headers: { Authorization: 'Bearer ' + c.token, 'Content-Type': 'application/json' },
    body: JSON.stringify(cmd)
  });
  if (!r.ok) throw new Error('redis ' + r.status);
  return (await r.json()).result;
}
const str = (v, n) => String(v == null ? '' : v).slice(0, n);
function clean(o) {
  o = o && typeof o === 'object' ? o : {};
  const s = {
    lang: o.lang === 'en' ? 'en' : 'bn',
    theme: THEMES.includes(o.theme) ? o.theme : 'biye',
    open: OPENS.includes(o.open) ? o.open : 'none',
    mu: /^[a-z0-9_-]{1,30}$/i.test(o.mu || '') ? o.mu : 'none',
    groom: str(o.groom, 60), bride: str(o.bride, 60),
    groomFam: str(o.groomFam, 120), brideFam: str(o.brideFam, 120),
    msg: str(o.msg, 300), phone: str(o.phone, 30), ev: {}
  };
  for (const k of EVK) {
    const e = (o.ev && o.ev[k]) || {};
    s.ev[k] = {
      on: !!e.on,
      date: /^\d{4}-\d{2}-\d{2}$/.test(e.date || '') ? e.date : '',
      time: /^\d{2}:\d{2}$/.test(e.time || '') ? e.time : '',
      venue: str(e.venue, 100), addr: str(e.addr, 160)
    };
  }
  return s;
}
function newId() {
  const b = crypto.randomBytes(8);
  let id = '';
  for (let i = 0; i < 8; i++) id += ALPHABET[b[i] % ALPHABET.length];
  return id;
}

module.exports = async (req, res) => {
  res.setHeader('Cache-Control', 'no-store');
  const c = creds();
  if (!c) return res.status(503).json({ error: 'storage not connected' });
  try {
    if (req.method === 'GET') {
      const id = String((req.query && req.query.id) || '');
      if (!/^[a-z0-9]{4,20}$/i.test(id)) return res.status(400).json({ error: 'bad id' });
      const raw = await redis(c, ['GET', 'card:' + id]);
      if (!raw) return res.status(404).json({ error: 'not found' });
      res.setHeader('Cache-Control', 'public, s-maxage=300, stale-while-revalidate=3600');
      return res.status(200).json({ card: JSON.parse(raw) });
    }
    if (req.method === 'POST') {
      const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
      if (JSON.stringify(body || {}).length > MAX_BYTES) return res.status(413).json({ error: 'too large' });
      const value = JSON.stringify(clean(body));
      for (let i = 0; i < 4; i++) {
        const id = newId();
        const ok = await redis(c, ['SET', 'card:' + id, value, 'EX', TTL, 'NX']);
        if (ok === 'OK') return res.status(200).json({ id });
      }
      return res.status(500).json({ error: 'could not allocate id' });
    }
    res.setHeader('Allow', 'GET, POST');
    return res.status(405).json({ error: 'method not allowed' });
  } catch (e) {
    return res.status(500).json({ error: 'server error' });
  }
};
