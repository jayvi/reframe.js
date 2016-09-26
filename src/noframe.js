export default function noframe(target, container) {
  let els = typeof target === 'string' ? document.querySelectorAll(target) : target;
  if (!('length' in els)) {
    els = [els];
  }
  for (let i = 0; i < els.length; i++) {
    const el = els[i];
    const height = el.offsetHeight;
    const width = el.offsetWidth;
    let maxwidth = `${width}px`;
    if (typeof container !== 'undefined' && container !== 'false') {
      const parent = document.querySelectorAll(container);
      maxwidth = window.getComputedStyle(parent[0], null).getPropertyValue('max-width');
      el.style.width = '100%';
      el.style.maxHeight = `calc(${maxwidth} * ${height}/${width})`;
    } else {
      el.style.display = 'block';
      el.style.marginLeft = 'auto';
      el.style.marginRight = 'auto';
      let fullwidth = `${maxwidth}px`;
      if (width > el.parentElement.offsetWidth) {
        fullwidth = el.parentElement.offsetWidth;
        el.style.maxHeight = `calc(${fullwidth}px * ${height}/${width})`;
      } else {
        el.style.maxHeight = `calc(${maxwidth} * ${height}/${width})`;
      }
      el.style.width = `${fullwidth}px`;
    }
    el.style.height = `calc(100vw * ${height}/${width})`;
    el.style.maxWidth = '100vw';
  }
}
const plugin = window.$ || window.jQuery || window.zepto;
if (plugin) {
  plugin.fn.extend({
    noframe(container) {
      return noframe(this, container);
    },
  });
}
