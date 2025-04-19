import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      'react-app',
      'react-app/jest',
      'plugin:testing-library/react',
      'plugin:jest-dom/recommended',
      'plugin:prettier/recommended',
      'plugin:jsx-a11y/recommended',
    ],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      // "import/no-extraneous-dependencies": [2, { "devDependencies": true }],
      'testing-library/await-async-query': 'error',
      'testing-library/no-await-sync-query': 'error',
      'jest-dom/prefer-checked': 'error',
      'jest-dom/prefer-enabled-disabled': 'error',
      'jest-dom/prefer-required': 'error',
      'jest-dom/prefer-to-have-attribute': 'error',
      'react/prop-types': ['off'],
      // "max-lines-per-function": ["warn", 50],
      'react/jsx-filename-extension': [
        1,
        { extensions: ['.js', '.tsx', '.jsx'] },
      ],
      'import/extensions': ['error', 'never'],
      'import/no-unresolved': 2,
      'sort-imports': 'off',
      'import/order': 'off',
      'no-shadow': 'off',
      // "@typescript-eslint/no-shadow": "error",
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react/react-in-jsx-scope': 'off',
      'prettier/prettier': [
        'warn',
        {
          endOfLine: 'auto',
        },
      ],
      'react/jsx-one-expression-per-line': 'off',
      'react/jsx-curly-newline': 'off',
      // "import/prefer-default-export": "off"

      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
);
