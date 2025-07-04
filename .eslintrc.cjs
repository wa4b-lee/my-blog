module.exports = {
  root: true,
  env: {
    browser: true, // 브라우저 환경
    node: true,    // 노드 환경
  },
  parser: 'vue-eslint-parser', // Vue 코드 파서
  parserOptions: {
    ecmaVersion: 'latest',      // 최신 ECMAScript 버전
    sourceType: 'module',       // ES 모듈 사용
  },
  plugins: ['vue'],
  extends: [
    'eslint:recommended',       // ESLint 권장 규칙
    'plugin:nuxt/recommended',  // Nuxt 권장 규칙
    'plugin:vue/recommended',   // Vue 권장 규칙
    'plugin:prettier/recommended' // Prettier 충돌 방지
  ],
  rules: {
    'no-console': 'off',
    'vue/html-self-closing': [
      'warn',
      {
        html: {
          void: 'always',
          normal: 'never',
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      },
    ],
    'prettier/prettier': [
      'error',
      {
        arrowSpacing: ['error', { before: true, after: true }],
        singleQuote: true,
        semi: true,
        useTabs: false,
        tabWidth: 2,
        trailingComma: 'all',
        printWidth: 80,
        bracketSpacing: true,
        arrowParens: 'always',
        endOfLine: 'auto',
      },
    ],
  },
};
