module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['react', '@typescript-eslint'],
  rules: {
    // Microsoft Edge Tools 관련 경고 무시
    'no-undef': 'off',
    'axe/name-role-value': 'off',
    // TS 특정 에러 무시
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-spread': 'off'
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
};
