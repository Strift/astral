module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'standard',
    'plugin:vue/strongly-recommended',
    // '@nuxtjs',
    // 'plugin:nuxt/recommended'
  ],
  // add your custom rules here
  rules: {
  }
}
