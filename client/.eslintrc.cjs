module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'prettier'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'prettier/prettier': [
      'warn',
      {
        "arrowParens": "always",
        "bracketSameLine": false,
        "bracketSpacing": true,
        "semi": true,
        "singleQuote": true,
        "jsxSingleQuote": false,
        "quoteProps": "as-needed",
        "trailingComma": "all",
        "singleAttributePerLine": false,
        "htmlWhitespaceSensitivity": "css",
        "vueIndentScriptAndStyle": false,
        "proseWrap": "preserve",
        "insertPragma": false,
        "printWidth": 120,
        "requirePragma": false,
        "useTabs": false,
        "embeddedLanguageFormatting": "auto",
        "tabWidth": 2,
        "endOfLine": "auto"
      }
    ],
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
  },
}
