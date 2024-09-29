import tsParser from '@typescript-eslint/parser'
import eslintConfigPrettier from 'eslint-config-prettier'
import eslintPluginSvelte from 'eslint-plugin-svelte'
import svelteParser from 'svelte-eslint-parser'
import tsEslint from 'typescript-eslint'

export default tsEslint.config(
  ...tsEslint.configs.recommended,
  ...eslintPluginSvelte.configs['flat/recommended'],
  eslintConfigPrettier,
  ...eslintPluginSvelte.configs['flat/prettier'],
  {
    files: ['src/**/*.svelte'],
    languageOptions: {
      sourceType: 'module',
      parser: svelteParser,
      parserOptions: {
        parser: tsParser,
        extraFileExtensions: ['.svelte']
      }
    },
    rules: {
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }]
    }
  },
  {
    files: ['src/**/*.ts'],
    languageOptions: {
      parserOptions: {
        parser: tsEslint.parser,
        project: true,
        extraFileExtensions: ['.svelte']
      }
    }
  }
)
