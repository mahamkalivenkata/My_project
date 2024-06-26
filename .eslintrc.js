module.exports = [
  {
    files: ['*.js'], // Apply the following configuration to JavaScript files
    languageOptions: {
      parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module'
      }
    },
    rules: {
      indent: ['error', 2],
      'linebreak-style': ['error', 'unix'],
      quotes: ['error', 'single'],
      semi: ['error', 'always'],
      eqeqeq: ['error', 'always'],
      'no-unused-vars': 'off', // Disable no-unused-vars rule
      'no-console': 'off' // Disable no-console rule
    }
  }
];
