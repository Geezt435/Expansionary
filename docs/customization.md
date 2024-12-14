# Customization

## Dimesions of Customization

### Theme Colors

### Background

### Glass Effect

### Animations

The animations are fairly subtle by default.

#### Relevant Areas

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

`/src/components/shortcodes/ObserverScript.astro`:

This is a segment of JS run as an inline `<script>` in the `Base` layout component. That is, it's Javascript code that's loaded on every page of the site. It functions as a custom CSS processor for the made-up class `intersect`. The simple idea of `intersect` is to trigger an animation whatever it's applied to, only when it enter's the browser's viewport (section of the screen that's visible). In the template, you can see this in action each time you load a page, with the various components fading into view, and, as you scroll further down a page, additional components become visible.

This functionality has some problems:

1. It's not quite like ordinary CSS. It cannot be extracted to the global classes in `/src/styles/`.
2. In its current form, it presents accessability issues. There is an accessability feature supported by browsers called `prefers-reduced-motion`. To be more friendly, these unnecessary animations should be disabled when this prefernece is detected.
3. By default, many of the animations include a "fade-in", bringing the opacity of an item from 0% (invisible) to 100% (fully opaque). This is a bit finnicky when crossing the already semi-opaque "Glass" objects. When not handled properly, the result is a discrete snap from 0% opacity to 100% opacity, which doesn't look good. In all cases thus far this issue has been circumnavigable, but keep this in minds for your own customizations: when editing an "intersect" item, making it behave right on an opaque background might make it behave poorly on a semi-opaque backgground, or vice-versa.

These animations add a fair bit of weight to the pages and complexity to the customization, but in my opinion make a world of difference in the feel of the site. If you don't think it worth the hassle, that's fine, it's also pretty easy to remove:

1. Ctrl-Shift-F for `intersect:animate` in the project and delete that and any CSS classes to the right of that on the given line.
2. Delete the `<ObserverScript />` reference and import in `/src/components/layouts/Base.astro`
3. Delete `/src/components/shortcodes/ObserverScript.astro`
4. Delete the `theme.extent.animation` and `theme.extend.keyframes` sections from the `module.exports` section of `/tailwind.config.js`.
