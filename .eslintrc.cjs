/* eslint-env node */
require('@vue/eslint-config-typescript')

module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    '@vue/eslint-config-typescript/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    './.eslintrc-auto-import.json'
  ],
  plugins: [
    'vue',
    'file-progress',
    'import',
    'simple-import-sort',
    'unused-imports'
  ],
  settings: {
    'import/resolver': {
      typescript: true,
      node: true,
      alias: {
        map: [
          ['@', './src'],
          ['@components', './src/components'],
          ['@utils', './src/utils'],
          ['@types', './src/types'],
          ['@assets', './src/assets']
        ],
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.vue', '.json']
      }
    }
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    parser: '@typescript-eslint/parser'
  },
  rules: {
    // File progress
    'file-progress/activate': 1,

    // Import sorting
    'simple-import-sort/imports': ['error', {
      groups: [
        // Side effect imports.
        ['^\\u0000'],
        // Node.js builtins prefixed with `node:`.
        ['^node:'],
        // Packages.
        // Things that start with a letter (or digit or underscore), or `@` followed by a letter.
        ['^vue', '^@?\\w'],
        // Absolute imports and other imports such as Vue-style `@/foo`.
        // Anything not matched in another group.
        ['^'],
        // Relative imports.
        // Anything that starts with a dot.
        ['^\\.']
      ]
    }],
    'simple-import-sort/exports': 'error',

    // Unused imports
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_'
      }
    ],

    // Import rules
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'import/no-unresolved': 'off', // TypeScript handles this
    'import/named': 'off',
    'import/namespace': 'off',
    'import/default': 'off',
    'import/no-named-as-default-member': 'off',

    // Vue rules
    'vue/multi-word-component-names': 'off',
    'vue/no-v-html': 'warn',
    'vue/component-name-in-template-casing': ['error', 'PascalCase', {
      registeredComponentsOnly: false,
      ignores: []
    }],
    'vue/component-definition-name-casing': ['error', 'PascalCase'],
    'vue/custom-event-name-casing': ['error', 'camelCase'],
    'vue/define-macros-order': ['error', {
      order: ['defineProps', 'defineEmits']
    }],
    'vue/html-comment-content-spacing': ['error', 'always'],
    'vue/no-required-prop-with-default': 'error',
    'vue/no-useless-v-bind': 'error',
    'vue/padding-line-between-blocks': ['error', 'always'],
    'vue/prefer-separate-static-class': 'warn',
    'vue/prefer-true-attribute-shorthand': 'error',
    'vue/block-order': ['error', {
      order: ['script', 'template', 'style']
    }],
    'vue/block-lang': ['error', {
      script: { lang: 'ts' }
    }],
    'vue/component-api-style': ['error', ['script-setup']],
    'vue/component-options-name-casing': ['error', 'PascalCase'],
    'vue/html-button-has-type': 'error',
    'vue/no-boolean-default': ['error', 'default-false'],
    'vue/no-empty-component-block': 'error',
    'vue/no-multiple-objects-in-class': 'error',
    'vue/no-static-inline-styles': 'warn',
    'vue/no-template-target-blank': 'error',
    'vue/no-useless-mustaches': 'error',
    'vue/no-useless-v-bind': 'error',
    'vue/prefer-define-options': 'error',
    'vue/prefer-separate-static-class': 'error',
    'vue/prefer-true-attribute-shorthand': 'error',
    'vue/require-macro-variable-name': ['error', {
      defineProps: 'props',
      defineEmits: 'emit',
      defineSlots: 'slots',
      useSlots: 'slots',
      useAttrs: 'attrs'
    }],
    'vue/v-for-delimiter-style': ['error', 'in'],

    // TypeScript rules
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-unused-vars': 'off', // Using unused-imports plugin instead
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-non-null-assertion': 'warn',
    '@typescript-eslint/consistent-type-imports': ['error', {
      prefer: 'type-imports',
      disallowTypeAnnotations: false
    }],
    '@typescript-eslint/no-import-type-side-effects': 'error',

    // General JavaScript rules
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-unused-vars': 'off', // Use TypeScript's no-unused-vars instead
    'prefer-const': 'error',
    'no-var': 'error',
    'object-shorthand': ['error', 'always'],
    'prefer-template': 'error',
    'prefer-arrow-callback': 'error',
    'arrow-spacing': ['error', { before: true, after: true }],
    'comma-dangle': ['error', 'never'],
    'semi': ['error', 'never'],
    'quotes': ['error', 'single', { avoidEscape: true }],
    'indent': ['error', 2, { SwitchCase: 1 }],
    'space-before-function-paren': ['error', {
      anonymous: 'always',
      named: 'never',
      asyncArrow: 'always'
    }],
    'keyword-spacing': ['error', { before: true, after: true }],
    'space-infix-ops': 'error',
    'eol-last': ['error', 'always'],
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
    'no-trailing-spaces': 'error'
  },
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        'indent': 'off'
      }
    }
  ]
}
