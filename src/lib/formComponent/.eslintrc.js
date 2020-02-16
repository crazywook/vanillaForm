module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    mocha: true,
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2018,
  },
  rules: {
    'no-var': 'off',
    'semi': 'error',
    'arrow-parens': 'off',
    'arrow-body-style': 'off',
    'func-names': 'off',
    'function-paren-newline': 'off',
    'global-require': 'off',
    'implicit-arrow-linebreak': 'off',
    'import/no-dynamic-require': 'off',
    'no-mixed-operators': 'off',
    'no-plusplus': 'off',
    'no-prototype-builtins': 'off',
    'no-underscore-dangle': 'off',
    'no-unused-expressions': 'off',
    'no-use-before-define': ['error', { functions: false, classes: false }],
    'max-classes-per-file': 'off',
    'max-len': [1, 200],
    'object-curly-spacing': ['error', 'always'],
    'operator-linebreak': 'off',
    'padded-blocks': 'off',
    'prefer-arrow-callback': 'off',
    'prefer-destructuring': 'off',
    'radix': 'off',
    'quotes': [
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    'indent': ['error', '2']
  },
};