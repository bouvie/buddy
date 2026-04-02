const path = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,ts}',
    path.resolve(__dirname, '../../libs/ui/src/**/*.{html,ts}'),
  ],
  theme: {
    extend: {
      colors: {
        'k9-bg':             'var(--k9-color-bg)',
        'k9-surface':        'var(--k9-color-surface)',
        'k9-surface-deep':   'var(--k9-color-surface-deep)',
        'k9-primary':        'var(--k9-color-primary)',
        'k9-primary-text':   'var(--k9-color-primary-text)',
        'k9-accent':         'var(--k9-color-accent)',
        'k9-accent-text':    'var(--k9-color-accent-text)',
        'k9-danger':         'var(--k9-color-danger)',
        'k9-warning':        'var(--k9-color-warning)',
        'k9-info':           'var(--k9-color-info)',
        'k9-success':        'var(--k9-color-success)',
        'k9-critical':       'var(--k9-color-critical)',
        'k9-text':           'var(--k9-color-text)',
        'k9-text-secondary': 'var(--k9-color-text-secondary)',
        'k9-text-muted':     'var(--k9-color-text-muted)',
      },
      fontSize: {
        'k9-display': ['var(--k9-font-size-display)', { lineHeight: 'var(--k9-line-height-display)' }],
        'k9-h1':      ['var(--k9-font-size-h1)',      { lineHeight: 'var(--k9-line-height-h1)' }],
        'k9-h2':      ['var(--k9-font-size-h2)',      { lineHeight: 'var(--k9-line-height-h2)' }],
        'k9-h3':      ['var(--k9-font-size-h3)',      { lineHeight: 'var(--k9-line-height-h3)' }],
        'k9-body':    ['var(--k9-font-size-body)',     { lineHeight: 'var(--k9-line-height-body)' }],
        'k9-label':   ['var(--k9-font-size-label)',    { lineHeight: 'var(--k9-line-height-label)' }],
        'k9-caption': ['var(--k9-font-size-caption)',  { lineHeight: 'var(--k9-line-height-caption)' }],
      },
      fontFamily: {
        sans: ['var(--k9-font-family)'],
      },
      spacing: {
        'k9-xs':   'var(--k9-spacing-xs)',
        'k9-sm':   'var(--k9-spacing-sm)',
        'k9-md':   'var(--k9-spacing-md)',
        'k9-lg':   'var(--k9-spacing-lg)',
        'k9-xl':   'var(--k9-spacing-xl)',
        'k9-xxl':  'var(--k9-spacing-xxl)',
        'k9-xxxl': 'var(--k9-spacing-xxxl)',
      },
      borderRadius: {
        'k9-sm':   'var(--k9-radius-sm)',
        'k9-md':   'var(--k9-radius-md)',
        'k9-lg':   'var(--k9-radius-lg)',
        'k9-xl':   'var(--k9-radius-xl)',
        'k9-full': 'var(--k9-radius-full)',
      },
      boxShadow: {
        'k9-sm':    'var(--k9-shadow-sm)',
        'k9-md':    'var(--k9-shadow-md)',
        'k9-lg':    'var(--k9-shadow-lg)',
        'k9-xl':    'var(--k9-shadow-xl)',
        'k9-focus': 'var(--k9-shadow-focus)',
      },
      transitionDuration: {
        'k9-fast':   'var(--k9-transition-duration-fast)',
        'k9-normal': 'var(--k9-transition-duration-normal)',
        'k9-slow':   'var(--k9-transition-duration-slow)',
      },
    },
  },
  plugins: [],
};
