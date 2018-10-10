module.exports = {
  root: true,
  env: {
    node: true,
  },
  parserOptions: {
    ecmaVersion: 8,
    sourceType: "module"
  },
  extends: ['eslint:recommended'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'semi': ['error', 'always'],
    'quotes': ['error', 'double'],
    'comma-dangle': 'off',
    'no-unused-vars': 'off',
  },
};
