# Beginner's README

The purpose of this document is to explain this code in greater detail for a novice to web development.

This is a template for a static, content-driven website. Currently supported content collection types include a blog, recipe book, and documentation set. Using these as a guide you can create your own as well. This architecture does not support any sort of dynamic content (user profiles, etc.), there is no real backend at all.

## Quick Links

- [Template](https://github.com/reednel/pages)
- [Favicon Generator](https://favicon.io/)
- [Google Webfonts Helper](https://gwfh.mranftl.com/fonts)
- [Cloudfare Domains](https://domains.cloudflare.com/?index=)
- [reednel.com](https://reednel.com)

## Justifying the Tech Stack

1. We want a static site.
    1. There's no need for dynamic components.
    2. Static sites are easier to build and maintain.
    3. Static sites are easier to deploy and host.
    4. Static sites are more secure and less breakable.
2. For base architecture, a couple major options are **Gatsby** and **Astro**.
    1. Gatsby works more naturally with React (fancy, extremely popular, kinda complicated JavaScript framework).
    2. Astro is a little younger, and in my opinion much friendlier for this use case.
3. Host Choice
    1. A few places host your site for free, but many won't. Given that we're going to be static and low-traffic (no offense), we're prime candidates for free hosting.
    2. Host choice in this framework isn't the biggest committment, and should not be that hard to change later if you want.
    3. **GitHub Pages** and **Cloudflare Pages** are good options these days.
        1. GitHub Pages is easy, you're already using Github.
        2. Cloudflare Pages offers a bit more power, but nothing super valuable.

## TODO

1. Find and purchase a domain name from [Cloudflare](https://domains.cloudflare.com/?index=) or someone.
   - Don't do this until you're committed to your site of course.
   - If you're planning to use GitHub Pages to host, you don't need your own domain, but it'd probably be better if you had one anyway.
2. Get a [GitHub](https://github.com/) account.
3. Download and install [VS Code](https://code.visualstudio.com/download).
4. Download and install [Git](https://git-scm.com/download/win).
5. Follow [this guide](https://learn.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-windows) to install NVM and Node/NPM on Windows.
6. Acquire your own copy of the template repository.
   - If you fork this repo, you could continue to pull updates to the `template` branch as they're made.
   - If you don't want to deal with that, and want to completely cut Git ties to `reednel/pages`, this is acceptable.
7. Follow the repo's README to get the app up and running locally.
8. Follow Astro's [guide](https://docs.astro.build/en/guides/deploy/github/) for deploying a site to GitHub Pages.
9. Follow [this guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site?platform=windows) to get your domain name swapped in.

## But Why?

1. Git, Github
    1. Git is a version control system, the most popular and I'd say best. Git tracks changes to files. It's kind of opaque but it's simple enough once you spend some time with it. GitHub is a platform over Git that makes it easier to look at and interact with, and stores things in clouds, and a bunch of other valuable things. Another thing is that GitHub Actions + GitHub Pages will make it so whatever we push up to GitHub is automatically built and deployed on your site.
2. Astro
    1. If we weren't using a web framework such as Astro, we'd be committed to plain HTML/CSS/JS, with which it is much more difficult to make nice things. The benefit to simplicity is you won't have dependency issues basically ever. But the occasional maintainence is worth it.
3. Node, NVM, NPM
    1. Node is Hell, don't forget it. The source of my hatred for web development.
    2. But it's a necessary hell. With Astro (and most other frameworks) it's inescapable.
    3. Node is Node, but NPM is the Node Package Manager. What Node actually does is...basically be a vast library of web tools (packages). But these things are small and numerous and conflict in unpredictable ways and depend on each other and specific versions in particular. This trememdous mess is what NPM handles. Albeit not very well sometimes.
    4. But Node packages aren't the only ones that are a wretched mess with agonizing versioning issues...Node is too. You don't now, but it is likely that some time you will need another version of Node for different (or just updated) web dev bullshit. The Node Version Manager (NVM) makes the installation of and swapping between Node versions easy.
4. VS Code
    1. VS Code is a lightweight but very powerful code editor. Part of me dies every time I look at code and it's not inside a VS Code window. The best thing Microsoft ever made, no contest.

## Project Structure

### ./

#### Git/GitHub & Project Stuff

- `.git` is a hidden folder. It is the thing containing all the git tracking. It should never be editied manually. Basically you should just ignore it, it's hidden for a reason.
- `.gitignore` is a file that tells git which files and folders not to track. Some of the stuff in the repository you only want to have locally. That could be really big assets, files with sensitive info like keys, etc. You likely won't need to edit this at all.
- `.github` is a folder with GitHub specific things, of course. For your purposes, all this does is hold the script that automatically builds and deploys your site to your space on GitHub Pages. You should not need to touch this folder either.
- `README.md` is the project README, of course. You can put whatever you want here, it will be displayed on the the repo's page on GitHub.
- `LICENSE` contains the license details. The MIT license is a good and honorable one. You should not use a more restrictive license than this on the repository overall. As a software license, it doen not apply to the actual content, such as your writings. I added a `/terms` page where you will be able to outline whatever permissions you want. I have something there for my own site, but I'm no lawyer and also don't mind that much if people steal my IP.

#### Node Stuff

- Recall, a huge portion of what allows the site to work is node stuff. Your site *depends on* hundreds of node packages to run.
- `package.json` is basically a list of your direct node dependencies. This is not meant to be edited directly.
- `package_lock.json` is basically a list of all your node dependencies. This is very much not meant to be edited directly.
- `node_modules` contains the dependencies listed in `package_lock.json`. This is what generated/updated when you run `npm install`. There's a lot of stuff in here, and NPM makes it easy to install, so we make sure not to track it with Git.

### src/

- This folder holds all of your site's source code.
- `content/` is where all your collections of content live.
  - Once development is pretty much done on your site and you're happy with how everything looks and is structured, the expectation is that you will rarely need to interact with anything outside of this folder.
- `layouts/` contains the layouts (the structure) for each of your pages.
- `pages/` contains all the pages.
  - Important note: the structure of this folder defines the routing structure for your site. So if in the `pages` folder you have `blog/categories/index.astro`, you will have that page `index.astro` located at `tristanrosswriting.com/blog/categories`.
- These three folders form a core trio for most of the code. There are a number of other pieces that don't fit into this pipeline, but the big idea is that `content` holds the actual written content displayed to your site, `layouts` is where you give structure to that content, and `pages` is where you link it all up to actually appear on the site.

### public/

- `images/` is where you put all images that will be displayed on the site. Preferably, don't dump every image right in there, make subdirectories. For example, if you keep the blog content collection, make a folder `blog`, and put any images your blog uses in there.
- `fonts/` holds the actual font files that all text on your site will be displayed in.
  - Use the [Google Webfonts Helper](https://gwfh.mranftl.com/fonts) to download your fonts. You do not want to be downloading/importing more files than you actually need, so make sure you don't. There's more details here, but I will be happy to help if you need.
- Important note: Whenever you reference an image within the project, the root directory for it is assumed by Astro to be `public`. That means, for example, if you're writing a blog post and want to pull in an image `apple.png`, you'd reference it by just `/images/blog/apple.png`, or whichever subdirectory you put it in.
- `CNAME` must hold the value `www.yourdomain.com`. Without going into detail, this is necessary to link your domain to the site, and get all the necessary certificates set up.
- `robots.txt` generally directs web-crawling bots. This one doesn't specify much, but it's fine how it is.
- `.htaccess` is also probably fine for you as it is.

## How To

### The Main Loop

Run the site locally: `npm run dev`

Once you've made all the changes you want...

- Stage your changed files for commit: `git add .`
- Commit them, with a descriptive message: `git commit -m "message here"`
- Push the changes up to GitHub: `git push origin main`

### Other Useful Commands

If there's a change to any of your Node packages: `npm install`
If you mess things up real bad and just want to revert to the last commit: `git reset --hard`
When you want to pull changes down from GitHub: `git pull origin main`
