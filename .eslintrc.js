module.exports = {
    root: true,
    extends: [
        'plugin:vue/recommended',
        'eslint:recommended'
    ],
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: '@babel/eslint-parser',
        requireConfigFile: false,
        sourceType: 'module',
        ecmaVersion: 2020
    },
    rules: {
        'vue/multi-word-component-names': 0,
        'no-unused-vars': 'warn'
    }
}
