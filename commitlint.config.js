/**
 * git hooks base: husky lint-staged
 * pre-commit: @commitlint/cli @commitlint/config-conventional
 */
module.exports = { extends: ['@commitlint/config-conventional'] }
