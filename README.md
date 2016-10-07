[![npm version 0.1.7](https://badge.fury.io/js/reframe.js.svg)](https://www.npmjs.com/package/reframe.js)
[![Bower version 0.0.5](https://badge.fury.io/bo/reframe.js.svg)](https://github.com/dollarshaveclub/reframe.js)
[![Build Status](https://travis-ci.org/dollarshaveclub/reframe.js.svg?branch=master)](https://travis-ci.org/dollarshaveclub/reframe.js)
[![Share](https://img.shields.io/twitter/url/http/shields.io.svg?style=social&maxAge=2592000)](https://twitter.com/home?status=Reframe+unresponsive+elements+responsively.+%F0%9F%92%AAhttps%3A%2F%2Fgithub.com%2Fdollarshaveclub%2Freframe.js+%40DSCEngineering+%40yowainwright+%23JavaScript)

## 🖼 Reframe.js

Reframe.js is a javascript plugin that makes elements scale at a fixed ratio

### Installing
Install via NPM or Bower
```sh
npm i reframe.js --save-dev
```
or
```sh
bower i reframe.js --save-dev
```

### Setup
1.  Add `dist/reframe.js`.
2.  Add reframe `css/scss`  to your `css`.
3.  `reframe` the element you'd like to re-frame.

### Examples

```javascript
reframe('iframe'); // Wrap all iFrames in the page
reframe(document.getElementById('my-frame')); // Pass a DOM element
reframe(document.querySelectorAll('.my-targets')) // Pass a live node list
```

Elements that have been wrapped with reframe will not be wrapped twice.

### How?

**Reframe.js** removes a specified element's `height & width attributes` and then wraps that element in `div` that is an [intrinsic ratio](http://alistapart.com/article/creating-intrinsic-ratios-for-video) of the original element. This plugin is great for **embedded content** like `iframes` or `videos`.

### Why?

**Reframe.js** is inspired by [FitVids](https://github.com/davatron5000/FitVids.js) and does what FitVids does but without the need for `jQuery`. This makes the plugin highly valuable when including it in a module that has to be very small and with minimal dependencies. Here's a basic [codepen example](http://codepen.io/yowainwright/pen/amzAEo).

This plugin is small - `~1.3kb` unminified and is meant to do 1 thing - _wrap elements that aren't responsive and make them responsive_. 💪

### Options

If you'd like to not use the classname 'js-reframe', just use your own.

```javascript
reframe('iframe', 'my-classname');
```
### jQuery

You can use **Reframe.js** with jQuery as well.

```javascript
$('iframe').reframe();

// While using a custom class name
$('iframe').reframe('my-classname');
```
## _New:_ Noframe.js

Noframe.js makes the same ratio as Reframe.js. Noframe.js's benefit is it doesn't wrap the element. This is best when concerned about not re-rendering an element. Reframe.js, instead, does a calculation **based on a parent element's** `max-width`.

🔎 &nbsp;**Note** if:
-   the `parent` does not have a max-width or
-   the secound argument is set to `'false'`

then the embed content's original width will be the max width and the video will only scale when the browser/viewport width is less than the max width. 👍

```javascript
noframe('iframe');
noframe('iframe', 'parent');
noframe('iframe', 'false'); // uses the original elements's width no matter what for the elements width ratio
```

### jQuery

You can use **Noframe.js** with jQuery as well.

```javascript
$('iframe').noframe();
$('iframe').noframe('parent');
$('iframe').noframe('false'); // uses the original elements's width no matter what for the elements width ratio
```
