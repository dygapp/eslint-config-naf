'use strict';

module.exports = {
  extends: 'eslint-config-egg',
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
  },
  rules: {
    quotes: [ 'warn', 'single' ],
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-unused-vars': [ 'warn', { vars: 'local', varsIgnorePattern: '^_' }],
    'no-console': 'off',
    'no-underscore-dangle': 'off',
    'no-tabs': 'off',
    'comma-dangle': 'off',
  },
};
