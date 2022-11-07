module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    'plugin:prettier/recommended'
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    //支持jsx写法
    ecmaFeatures: {
      jsx: true
      // tsx: true
    }
  },
  plugins: ['vue'],
  rules: {
    'vue/multi-word-component-names': 'off'
  }
}
