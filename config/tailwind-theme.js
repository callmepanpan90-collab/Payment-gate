/**
 * Tailwind theme config – dùng chung cho CDN (index.html) và CLI (tailwind.config.js)
 * Sửa màu, font tại đây.
 */
const themeExtend = {
  colors: {
    'bg-primary': 'var(--bg-primary)',
    'bg-secondary': 'var(--bg-secondary)',
    'bg-tertiary': 'var(--bg-tertiary)',
    'text-primary': 'var(--text-primary)',
    'text-secondary': 'var(--text-secondary)',
    'text-tertiary': 'var(--text-tertiary)',
    'text-quaternary': 'var(--text-quaternary)',
    'accent-primary': 'var(--accent-primary)',
    'accent-text': 'var(--accent-text)',
    'divider': 'var(--divider)',
    'border': 'var(--border)',
  },
  fontFamily: {
    'urbanist': ['Urbanist', 'sans-serif'],
  },
};

// Browser: dùng khi load qua <script src="config/tailwind-theme.js">
if (typeof window !== 'undefined') {
  window.TAILWIND_THEME_EXTEND = themeExtend;
}

// Node (Tailwind CLI): dùng khi require('./config/tailwind-theme.js')
if (typeof module !== 'undefined' && module.exports) {
  module.exports = themeExtend;
}
