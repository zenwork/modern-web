module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import', 'html', 'lit-a11y'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:lit-a11y/recommended'
  ],
  rules: {
    'react/jsx-no-bind': 'off',
    '@stencil/strict-boolean-conditions': 'off',
    '@typescript-eslint/adjacent-overload-signatures': 'error',
    '@typescript-eslint/array-type': [
      'error',
      {
        default: 'array'
      }
    ],
    '@typescript-eslint/ban-types': [
      'error',
      {
        types: {
          Object: {
            message: 'Avoid using the `Object` type. Did you mean `object`?'
          },
          Function: {
            message: 'Avoid using the `Function` type. Prefer a specific function type, like `() => void`.'
          },
          Boolean: {
            message: 'Avoid using the `Boolean` type. Did you mean `boolean`?'
          },
          Number: {
            message: 'Avoid using the `Number` type. Did you mean `number`?'
          },
          String: {
            message: 'Avoid using the `String` type. Did you mean `string`?'
          },
          Symbol: {
            message: 'Avoid using the `Symbol` type. Did you mean `symbol`?'
          }
        }
      }
    ],
    '@typescript-eslint/consistent-type-assertions': 'error',
    '@typescript-eslint/dot-notation': 'off',
    '@typescript-eslint/explicit-member-accessibility': [
      'error',
      {
        accessibility: 'no-public'
      }
    ],

    // temporary deactivate checks..
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',

    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'none',
          requireLast: true
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false
        }
      }
    ],
    '@typescript-eslint/no-empty-function': 'error',
    '@typescript-eslint/no-empty-interface': 'error',
    '@typescript-eslint/no-explicit-any': 'off',
    // '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/no-misused-new': 'error',
    '@typescript-eslint/no-namespace': 'error',
    '@typescript-eslint/no-parameter-properties': 'off',
    '@typescript-eslint/no-unused-expressions': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-var-requires': 'error',
    '@typescript-eslint/prefer-for-of': 'error',
    '@typescript-eslint/prefer-function-type': 'error',
    '@typescript-eslint/prefer-namespace-keyword': 'error',
    '@typescript-eslint/quotes': [
      'error',
      'single',
      {
        avoidEscape: true
      }
    ],
    '@typescript-eslint/semi': [
      'error',
      'never'
    ],
    '@typescript-eslint/triple-slash-reference': [
      'error',
      {
        'path': 'always',
        'types': 'prefer-import',
        'lib': 'always'
      }
    ],
    '@typescript-eslint/unified-signatures': 'error',
    'arrow-parens': [
      'off',
      'always'
    ],
    'camelcase': 'error',
    'comma-dangle': 'error',
    'complexity': 'off',
    'constructor-super': 'error',
    'curly': [
      'error',
      'multi-line'
    ],
    'eqeqeq': [
      'error',
      'smart'
    ],
    'guard-for-in': 'off',
    'id-blacklist': [
      'error',
      'any',
      'Number',
      'number',
      // 'String',
      'string',
      // 'Boolean',
      'boolean',
      'Undefined',
      'undefined'
    ],
    'id-match': 'error',
    'import/no-unresolved': 'off',
    'max-classes-per-file': 'off',
    'new-parens': 'error',
    'no-bitwise': 'error',
    'no-caller': 'error',
    'no-cond-assign': 'error',
    'no-console': 'off',
    'no-debugger': 'error',
    'no-empty': 'error',
    'no-eval': 'error',
    'no-fallthrough': 'off',
    'no-inner-declarations': 'off',
    'no-invalid-this': 'off',
    'no-new-wrappers': 'error',
    'no-shadow': [
      'error',
      {
        'hoist': 'all'
      }
    ],
    'no-throw-literal': 'error',
    'no-trailing-spaces': 'error',
    'no-undef-init': 'error',
    'no-undef': 'off',
    'no-underscore-dangle': 'off',
    'no-unsafe-finally': 'error',
    'no-unused-labels': 'error',
    'no-var': 'error',
    'object-shorthand': 'error',
    'one-var': [
      'error',
      'never'
    ],
    'prefer-arrow/prefer-arrow-functions': 'off',
    'prefer-const': 'error',
    'radix': 'error',
    'semi': ['error', 'never'],
    'spaced-comment': [
      'error',
      'always',
      {
        'markers': [
          '/'
        ]
      }
    ],
    'use-isnan': 'error',
    'valid-typeof': 'off'
  }

}
