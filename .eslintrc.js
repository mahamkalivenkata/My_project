module.exports = {
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  extends: ['eslint:recommended'],
  rules: {
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    eqeqeq: ['error', 'always']
  },
  overrides: [
    {
      files: ['*.js'], // Apply the following configuration to JavaScript files
      env: {
        browser: true,
        es2021: true,
        node: true
      },
      rules: {
        'no-unused-vars': 'off', // Disable no-unused-vars rule
        'no-console': 'off' // Disable no-console rule
      }
    }
  ]
};
