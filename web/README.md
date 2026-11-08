# UBC Rocket website (React + Vite)

## Develop
```bash
cd web
npm install
npm run dev        # http://localhost:5173
```

## Static build
```bash
npm run build      # outputs static files to web/dist
npm run preview    # serve dist locally to check it
```
`dist/` is plain HTML/CSS/JS and can be hosted anywhere. The build also copies
`index.html` to `404.html` so client-side routes work on GitHub Pages, and
`public/CNAME` keeps the www.ubcrocket.com custom domain.

Set `BASE_PATH` if the site is served from a sub-path, e.g.
`BASE_PATH=/ubcrocket_website/ npm run build`.

## Deploy to GitHub Pages
Handled by `.github/workflows/deploy-react.yml`:
1. Repo **Settings → Pages → Source: GitHub Actions** (this replaces the current
   branch-deployed static site, so only do it when the React site is ready).
2. **Actions → Deploy React site to GitHub Pages → Run workflow**.
3. Optionally uncomment the `push` trigger to deploy automatically on every push to `main`.
