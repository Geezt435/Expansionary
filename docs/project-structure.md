# Project Structure

## ./

### Git/GitHub & Project Stuff

- `.git` is a hidden folder. It is the thing containing all the git tracking. It should never be editied manually. Basically you should just ignore it, it's hidden for a reason.
- `.gitignore` is a file that tells git which files and folders not to track. Some of the stuff in the repository you only want to have locally. That could be really big assets, files with sensitive info like keys, etc. You likely won't need to edit this at all.
- `.github` is a folder with GitHub specific things, of course. For your purposes, all this does is hold the script that automatically builds and deploys your site to your space on GitHub Pages. You should not need to touch this folder either.
- `README.md` is the project README, of course. You can put whatever you want here, it will be displayed on the the repo's page on GitHub.
- `LICENSE` contains the license details. The MIT license is a good and honorable one. You should not use a more restrictive license than this on the repository overall. As a software license, it doen not apply to the actual content, such as your writings. I added a `/terms` page where you will be able to outline whatever permissions you want. I have something there for my own site, but I'm no lawyer.

### Node Stuff

- Recall, a huge portion of what allows the site to work is node stuff. Your site depends on hundreds of node packages to run.
- `package.json` is basically a list of your direct node dependencies. This is not meant to be edited directly.
- `package_lock.json` is basically a list of all your node dependencies. This is very much not meant to be edited directly.
- `node_modules` contains the dependencies listed in `package_lock.json`. This is what generated/updated when you run `npm install`. There's a lot of stuff in here, and NPM makes it easy to install, so we make sure not to track it with Git.

## src/

- This folder holds all of your site's source code, plus some other stuff.
- `assets/` is where you put all images that will be displayed on the site. Preferably, don't dump every image right in there, make subdirectories. For example, if you keep the blog content collection, make a folder `blog`, and put any images your blog uses in there.
- `content/` is where all your collections of content live.
  - Once development is pretty much done on your site and you're happy with how everything looks and is structured, the expectation is that you will rarely need to interact with anything outside of this folder.
- `components/` contains all components, which are modular pieces of HTML/CSS/JS. They can reference each other and ultimately are all referenced by the files in `pages/`.
  - `layouts/` contains the layouts (the structure) for each of your pages.
- `pages/` contains all the pages.
  - The structure of this folder defines the routing structure for your site. So if in the `pages` folder you have `blog/categories/index.astro`, you will have that page `index.astro` located at `example.com/blog/categories`.
  - The Docs collection actually breaks this rule, because its content is 2 layers deep. I implemented a workaround so the docs pages follow the structure of the `content/docs/` folder.
- These three folders form a core trio for most of the code. There are a number of other pieces that don't fit into this pipeline, but the big idea is that `content` holds the actual written content displayed to your site, `layouts` is where you give structure and style to that content, and `pages` is where you link it all up to actually appear on the site.

## public/

- `favicon/` should hold the various forms of your favicon (different devices and contexts will prefer different versions). [Favicon.io](https://favicon.io/) is a great generator for simple favicons.
- `fonts/` holds the actual font files that all text on your site will be displayed in.
  - Use the [Google Webfonts Helper](https://gwfh.mranftl.com/fonts) to download your fonts. You do not want to be downloading/importing more files than you actually need, so make sure you don't. There's more details here, but I will be happy to help if you need.
- Important note: Whenever you reference an image within the project, the root directory for it is assumed by Astro to be `public`. That means, for example, if you're writing a blog post and want to pull in an image `apple.png`, you'd reference it by just `"@assets/blog/apple.png"`, or whichever subdirectory you put it in.
- `CNAME` must hold the value `www.yourdomain.com`. Without going into detail, this is necessary to link your domain to the site, and get all the necessary certificates set up.
- `robots.txt` generally directs web-crawling bots. This one doesn't specify much, but it's fine how it is.
- `.htaccess` is also probably fine to be left as is.
