module.exports = {
  // To make ESLint and Prettier work together seamlessly
  extends: ['eslint:recommended', 'prettier'],
  plugins: ['prettier'],

  // ESLint environment
  env: {
    browser: true,
    node: true,
    es6: true,
  },

  // Specify the parser options (ES6 by default)
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },

  //  ESLint rules
  rules: {
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
  },
};
