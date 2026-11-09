/* Site settings. Edit this file, commit, and Vercel redeploys.
 *
 * api:    where card data is saved. Leave as is. Without a database the site still works:
 *         share links then carry the whole card inside the link (longer, but no setup).
 * tracks: your own music. Put mp3 files in public/music/ and list them here.
 *         Use only music you own or that is royalty-free, then add its credit in the label.
 */
window.BIYER_CONFIG = {
  api: '/api/card',
  tracks: [
    // { id: 'shanai', src: '/music/shanai.mp3', label: { bn: 'সানাই', en: 'Shanai' } },
  ]
};
