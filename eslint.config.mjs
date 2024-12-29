import blitzPlugin from '@blitz/eslint-plugin';
import { jsFileExtensions } from '@blitz/eslint-plugin/dist/configs/javascript.js';
import { getNamingConventionRule, tsFileExtensions } from '@blitz/eslint-plugin/dist/configs/typescript.js';

export default [
  {
<<<<<<< HEAD
    ignores: ['**/dist', '**/node_modules', '**/.wrangler', '**/bolt/build', '**/.history'],
=======
    ignores: [
      '**/dist',
      '**/node_modules',
      '**/.wrangler',
      '**/bolt/build',
      '**/.history',
    ],
>>>>>>> 48d3b799435c5f563650cf3ade719ed99182eb8e
  },
  ...blitzPlugin.configs.recommended(),
  {
    rules: {
      '@blitz/catch-error-name': 'off',
      '@typescript-eslint/no-this-alias': 'off',
      '@typescript-eslint/no-empty-object-type': 'off',
      '@blitz/comment-syntax': 'off',
      '@blitz/block-scope-case': 'off',
<<<<<<< HEAD
      'array-bracket-spacing': ['error', 'never'],
      'object-curly-newline': ['error', { consistent: true }],
      'keyword-spacing': ['error', { before: true, after: true }],
      'consistent-return': 'error',
      semi: ['error', 'always'],
      curly: ['error'],
      'no-eval': ['error'],
      'linebreak-style': ['error', 'unix'],
      'arrow-spacing': ['error', { before: true, after: true }],
=======
      'array-bracket-spacing': ["error", "never"],
      'object-curly-newline': ["error", { "consistent": true }],
      'keyword-spacing': ["error", { "before": true, "after": true }],
      'consistent-return': "error",
      'semi': ["error", "always"],
      'curly': ["error"],
      'no-eval': ["error"],
      'linebreak-style': ["error", "unix"],
      'arrow-spacing': ["error", { "before": true, "after": true }]
>>>>>>> 48d3b799435c5f563650cf3ade719ed99182eb8e
    },
  },
  {
    files: ['**/*.tsx'],
    rules: {
      ...getNamingConventionRule({}, true),
    },
  },
  {
    files: ['**/*.d.ts'],
    rules: {
      '@typescript-eslint/no-empty-object-type': 'off',
    },
  },
  {
    files: [...tsFileExtensions, ...jsFileExtensions, '**/*.tsx'],
    ignores: ['functions/*'],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['../'],
<<<<<<< HEAD
              message: "Relative imports are not allowed. Please use '~/' instead.",
=======
              message: 'Relative imports are not allowed. Please use \'~/\' instead.',
>>>>>>> 48d3b799435c5f563650cf3ade719ed99182eb8e
            },
          ],
        },
      ],
    },
  },
];
