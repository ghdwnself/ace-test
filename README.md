<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1-a_oR6jDq5x_Nz_MSWCN5A4fDS2kRvfU

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Deploy to GitHub Pages (Custom Domain)

This repository is configured to deploy to GitHub Pages with your custom domain.

### Setup Steps:

1. **Update the CNAME file**: Edit `public/CNAME` and replace `example.com` with your actual domain name (e.g., `yourdomain.com` or `www.yourdomain.com`)

2. **Configure DNS Settings on your domain registrar**:
   - For apex domain (e.g., `yourdomain.com`):
     - Add an `A` record pointing to GitHub Pages IPs:
       - `185.199.108.153`
       - `185.199.109.153`
       - `185.199.110.153`
       - `185.199.111.153`
   - For subdomain (e.g., `www.yourdomain.com`):
     - Add a `CNAME` record pointing to `<your-github-username>.github.io`

3. **Enable GitHub Pages**:
   - Go to your repository Settings → Pages
   - Under "Source", select "GitHub Actions"
   - The workflow will automatically deploy when you push to the `main` branch

4. **Push to main branch**: The GitHub Actions workflow will automatically build and deploy your site

### Manual Deployment

To deploy manually, you can run the workflow from the Actions tab in your repository.
