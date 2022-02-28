/* prettier-ignore */

module.exports = {
  env: {
    browser: true,
    node: true,
    es2020: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['@typescript-eslint', 'react', 'prettier'],
  extends: [
    'eslint:recommended',
  ],
  settings: {
    'import/resolver': {
      alias: {
        map: [['~', './src/']],
        extensions: ['.ts', '.js', '.tsx'],
      },
    },
  },
  rules: {
    'react/jsx-key': ['error', {
      checkFragmentShorthand: true,
    }],
  },
  overrides: [
    {
      // @NOTE: Избавляюсь от цикличных зависимостей
      files: ['**/components/widgets/**/*.tsx', '**/components/widgets/**/*.ts'],
      rules: {
        'no-restricted-imports': ['error', {
          paths: ['.', '..', '../..', './index', '../index', '../../index', '~/components/widgets'],
        }],
      },
    },
    {
      files: ['**/__tests__/**/*'],
      rules: {
        'unicorn/filename-case': 'off',
      },
    },
  ],
};
