module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/interface-name-prefix': [
      'warn',
      { prefixWithI: 'always' }
    ],
    '@typescript-eslint/no-unused-vars': ['warn', { args: 'none' }],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/quotes': [
      'warn',
      'single',
      { avoidEscape: true, allowTemplateLiterals: false }
    ],
    curly: ['warn', 'all'],
    eqeqeq: 'warn',
    'prefer-arrow-callback': 'warn'
  }
};
