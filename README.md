# portfolio
My professional portfolio showcasing Data Science, AI, Machine Learning and Software Development projects.

Open `index.html` in a browser. The site uses HTML, CSS, and vanilla JavaScript, and runs without dependencies or a build step.

- `index.html` contains the content and profile links.
- `assets/css/style.css` defines the responsive layout, colors, and animations.
- `assets/js/script.js` handles the mobile navigation and scroll animations.
- `assets/images/` contains original decorative illustrations. The charts are illustrative.

When hosting the site, use its absolute public image URL in the `og:image` tag for social previews.


## Publish with GitHub Pages

1. Create a separate public GitHub repository named `portfolio` with a `main` branch. Initializing it with a README creates that branch.
2. Commit the contents of this folder to the repository root. Keep `index.html`, `.nojekyll`, `README.md`, and `assets/` at the same level.
3. In the portfolio repository, open **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**, then select **main** and **/ (root)** and click **Save**.
4. Once the Pages deployment succeeds, return to **Settings → Pages** and click **Visit site**. For the `DevPanwar003/portfolio` repository, the expected URL is https://devpanwar003.github.io/portfolio/.
5. Set `og:image` in `index.html` to the live HTTPS URL ending in `/assets/images/hero.jpg`. Commit the update and check the deployed site.
