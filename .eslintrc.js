/**
 * basic: eslint prettier stylelint
 * prettier: eslint-config-prettier eslint-plugin-prettier
 * stylelint: stylelint-config-prettier-scss stylelint-config-standard-scss
 * eslint: @typescript-eslint/parser eslint-config-airbnb @typescript-eslint/eslint-plugin
 * react: eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks
 * import/export syntax: eslint-plugin-import
 */
module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:react/recommended', 'airbnb', 'plugin:prettier/recommended', 'plugin:react/jsx-runtime'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint', 'import'],
  rules: {
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-filename-extension': 'off',
    'react/forbid-prop-types': 0,
    'import/extensions': 0,
    'no-use-before-define': 0,
    'import/no-unresolved': 0,
    'no-shadow': 0,
    'import/prefer-default-export': 0,
    'no-console': ['error', { allow: ['warn', 'error'] }]
  }
}
