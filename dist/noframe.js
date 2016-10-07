(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.noframe = factory());
}(this, (function () { 'use strict';

function _noframe(target, container) {
  var els = typeof target === 'string' ? document.querySelectorAll(target) : target;
  if (!('length' in els)) {
    els = [els];
  }
  for (var i = 0; i < els.length; i++) {
    var el = els[i];
    var height = el.offsetHeight;
    var width = el.offsetWidth;
    if (typeof container !== 'undefined' && container !== 'false') {
      var parent = document.querySelectorAll(container);
      var maxwidth = window.getComputedStyle(parent[0], null).getPropertyValue('max-width');
      el.style.width = '100%';
      el.style.maxHeight = 'calc(' + maxwidth + ' * ' + height + '/' + width + ')';
    } else {
      var _maxwidth = width + 'px';
      el.style.display = 'block';
      el.style.marginLeft = 'auto';
      el.style.marginRight = 'auto';
      var fullwidth = _maxwidth + 'px';
      if (width > el.parentElement.offsetWidth) {
        fullwidth = el.parentElement.offsetWidth;
        el.style.maxHeight = 'calc(' + fullwidth + 'px * ' + height + '/' + width + ')';
      } else {
        el.style.maxHeight = 'calc(' + _maxwidth + ' * ' + height + '/' + width + ')';
      }
      el.style.width = fullwidth + 'px';
    }
    el.style.height = 'calc(100vw * ' + height + '/' + width + ')';
    el.style.maxWidth = '100vw';
  }
}
var plugin = window.$ || window.jQuery || window.zepto;
if (plugin) {
  plugin.fn.extend({
    noframe: function noframe(container) {
      return _noframe(this, container);
    }
  });
}

return _noframe;

})));