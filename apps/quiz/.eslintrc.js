module.exports = {
  root: true,
  env: {
    node: true,
    jest: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-param-reassign': 0,
    'import/no-named-as-default': 0,
    'import/prefer-default-export': 0,
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'comma-dangle': [0, 'never']
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
