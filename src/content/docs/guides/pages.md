---
title: Pages
---

## Content pages

### File formats

CelestialDocs supports authoring content in Markdown and MDX with no configuration required. 

### Add pages

Add new pages to your site by creating `.md` or `.mdx` files in `src/content/docs/`. Use sub-folders to organize your files and to create multiple path segments.

### Type-safe frontmatter

All pages share a customizable set of frontmatter properties that control their appearance:

```yaml
---
title: Sample
author: reednel
pubDatetime: 2024-04-09T12:00:00-05:30
modDatetime: 2024-08-01T12:00:00-05:30 
description: 'Sample description'
draft: true
tags:
- anything
- you
- want
hide_toc: 
hide_sidenav: 
hide_breadcrumbs: 
---
```
