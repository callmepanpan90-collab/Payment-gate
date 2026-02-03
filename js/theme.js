/**
 * Light / Dark theme
 */
(function() {
  var KEY = 'theme';
  var DEFAULT = 'dark';

  function get() {
    try {
      return localStorage.getItem(KEY) || DEFAULT;
    } catch (e) {
      return DEFAULT;
    }
  }

  function set(value) {
    value = value === 'light' ? 'light' : 'dark';
    try {
      localStorage.setItem(KEY, value);
    } catch (e) {}
    document.documentElement.setAttribute('data-theme', value);
    return value;
  }

  function toggle() {
    return set(get() === 'dark' ? 'light' : 'dark');
  }

  set(get());

  function bindToggle() {
    var btn = document.getElementById('theme-toggle');
    if (btn) btn.addEventListener('click', function() { toggle(); });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bindToggle);
  } else {
    bindToggle();
  }
})();
