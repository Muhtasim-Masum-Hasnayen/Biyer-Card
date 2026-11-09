# বিয়ের কার্ড (Biyer Card)

Bangla and English wedding invitation card builder. A visitor fills in a form, picks a theme
(Gaye Holud, Biye with palki, Bou-bhat, Ivory and gold), and gets a link to share on WhatsApp.
The card is animated and has music. There is no build step: plain HTML, CSS and JavaScript,
plus one small serverless function.

```
public/index.html   builder and card viewer (one page)
public/styles.css   styles
public/app.js       all the logic, drawings and the built-in music
public/config.js    site settings (music files)
api/card.js         saves and loads cards (Vercel serverless function, no dependencies)
vercel.json         tells Vercel to serve /public and route /c/<id> to the viewer
```

## Deploy

1. Push this folder to a GitHub repository.
2. On vercel.com choose **Add New, Project**, import the repository, keep the defaults
   (Framework Preset **Other**, no build command) and press **Deploy**.

The site works right away. Without a database, a share link carries the whole card inside the
link (about 650 characters), for example `https://your-site.vercel.app/?d=...`.

## Short links (optional, recommended)

For short links like `https://your-site.vercel.app/c/k7x2m9ab`, add a free Redis database:

1. In the Vercel project open **Storage**, then **Create Database**, and pick **Upstash for Redis**
   from the Marketplace (free plan is enough).
2. Connect it to the project. Vercel adds `KV_REST_API_URL` and `KV_REST_API_TOKEN` automatically.
3. Go to **Deployments** and redeploy once.

Cards are kept for one year. If the database is ever unreachable, the site falls back to the long
links, so sharing never breaks.

## Music

Each card can play a built-in tune (a tanpura drone with a sitar-style melody, generated in the
browser, so no file is needed). It starts when the guest taps "Tap to open" and a speaker button
turns it off.

To offer your own music as well:

1. Copy an mp3 into `public/music/`, for example `public/music/shanai.mp3`.
2. Add it to `public/config.js`:

```js
tracks: [
  { id: 'shanai', src: '/music/shanai.mp3', label: { bn: 'সানাই', en: 'Shanai' } },
]
```

Only use music you own or that is royalty-free. Keep files small (under 3 MB) so the card opens fast.

## Run on your computer

```
npx vercel dev
```

This runs the site and the API together. Opening `public/index.html` directly also works for the
builder, but share links need a server.

## Notes

- Link previews: WhatsApp shows the same title and description for every card, because the page
  is static. Showing each couple's names in the preview needs a server-rendered page, which can be
  added later.
- Sample names, dates and venues are placeholders. "Start blank" clears them.
- Fonts (Hind Siliguri, Tiro Bangla, Amiri) load from Google Fonts.
