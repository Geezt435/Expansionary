# Customization Guide

## Content Collections

### Stock Content

The written content in the template's collections was AI generated. The images are Creative Commons licenced with a paint filter applied to them. The goal was to have disposable content that better demonstrates the form of the collections than "Lorem ipsum". In case you're unsure, review my [Terms of Use](https://reednel.com/terms/) for the policy on the use and redistribution of this content.

## Theme Colors

By default, the pallet of this site is defined in just 7 color parameters (14 if you count their dark theme variants).

1. Text Primary (`txt-p`)
   - Main use: header text
2. Text Secondary (`txt-s`)
   - Main use: body text
3. Text Light (`txt-light`)
   - Main use: indicate selected text
4. Background Primary (`bg-p`)
   - Main use: main background (unless background is an image)
5. Background Secondary (`bg-s`)
   - Main use: glass elements
6. Background Tertiary (`bg-t`)
   - Main use: glass elements intended to contrast with `bg-s`
7. Border (`border`)
   - Main use: border around glass elements

### Relevant Areas

`/src/config/theme.json`:

```json
{
  "colors": {
    // ...
  }
}
```

Structural changes would be made among:

- `/tailwind.config.js`
- `/src/styles/*`
- The inline tailwind classes in `/src/components/*`

## Fonts

External Resources:

- [Google Fonts](https://fonts.google.com/)
- [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/font-family)
- [Inter Font](https://rsms.me/inter/#)
- [Manrope Font](https://www.gent.media/manrope)

Generic font families that require no import:

```txt
font-family: serif;
font-family: sans-serif;
font-family: monospace;
font-family: cursive;
font-family: fantasy;
font-family: system-ui; // uses the operating system's default
```

### Relevant Areas

#### `/src/config/theme.json`

```json
{
  "fonts": {
    // ...
  }
}
```

#### `/src/styles/fonts.css`

All unused fonts referneces should be removed from this file. Likewise, any new fonts should be added here. This acts as the link between the `theme.json` and the actual font file stored in `/public/fonts/`.

#### `/public/fonts/`

Put font files here. It is recommended to store here only the font files that are actually used in the site. The more font files there are, the slower the site will load. This template comes with a few moderate options to experiment with, but you should remove any that you don't end up using.

A common alternative to this is to use a CDN to host the font files. This will work a little differently than shown here. Do not use a Google CDN, those dirty bastards can track your users that way.

## Background

## Glass Effect

## Animations

The animations are fairly subtle by default.

### Usage

| Animation  | CSS                                          |
| ---------- | -------------------------------------------- |
| Fade       | `intersect:animate-fade opacity-0`           |
| Fade Up    | `intersect:animate-fadeUp opacity-0`         |
| Fade Down  | `intersect:animate-fadeDown opacity-0`       |
| Fade Right | `intersect:animate-fadeRight opacity-0`      |
| Fade Left  | `intersect:animate-fadeLeft opacity-0`       |
| Scale      | `intersect:animate-scale opacity-0 scale-50` |

| Animation Trigger             | CSS                  |
| ----------------------------- | -------------------- |
| Element fully in view         | `intersect-full`     |
| Element 50% in view           | `intersect-half`     |
| Element 25% in view (default) | `intersect-quarter`  |
| Animate on every intersection | `intersect-repeat`   |
| Animate element immediately   | `intersect-no-queue` |

### Relevant Areas

`/tailwind.config.js`:

```js
module.exports = {
  theme: {
    extend: {
      animation: {
        // ...
      },
      keyframes: {
        // ...
      }
    }
  }
```

`/src/components/base/ObserverScript.astro`:

This is a segment of JS run as an inline `<script>` in the `Base` layout component. That is, it's Javascript code that's loaded on every page of the site. It functions as a custom CSS processor for the made-up class `intersect`. The simple idea of `intersect` is to trigger an animation whatever it's applied to, only when it enter's the browser's viewport (section of the screen that's visible). In the template, you can see this in action each time you load a page, with the various components fading into view, and, as you scroll further down a page, additional components become visible.

This functionality has some problems:

1. It's not quite like ordinary CSS. It cannot be extracted to the global classes in `/src/styles/`.
2. In its current form, it presents accessability issues. There is an accessability feature supported by browsers called `prefers-reduced-motion`. To be more friendly, these unnecessary animations should be disabled when this prefernece is detected.
3. By default, many of the animations include a "fade-in", bringing the opacity of an item from 0% (invisible) to 100% (fully opaque). This is a bit finnicky when crossing the already semi-opaque "Glass" objects. When not handled properly, the result is a discrete snap from 0% opacity to 100% opacity, which doesn't look good. In all cases thus far this issue has been circumnavigable, but keep this in minds for your own customizations: when editing an "intersect" item, making it behave right on an opaque background might make it behave poorly on a semi-opaque background, or vice-versa.

These animations add a fair bit of weight to the pages and complexity to the customization, but in my opinion make a world of difference in the feel of the site. If you don't think it worth the hassle, that's fine, it's also pretty easy to remove:

1. Ctrl-Shift-F for `intersect:animate` in the project and delete that and any CSS classes to the right of that on the given line.
2. Delete the `<ObserverScript />` reference and import in `/src/components/base/BaseLayout.astro`
3. Delete `/src/components/base/ObserverScript.astro`
4. Delete the `theme.extent.animation` and `theme.extend.keyframes` sections from the `module.exports` section of `/tailwind.config.js`.
