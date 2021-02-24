module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    'react-app',
    'airbnb',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:import/typescript'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['react', 'import', 'jsx-a11y'],
  rules: {
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'interface',
        format: ['PascalCase']
      }
    ],
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.tsx']
      }
    ],
    'import/prefer-default-export': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never'
      }
    ],
    semi: ['error', 'never'],
    'react/jsx-props-no-spreading': ['off'],
    'no-console': ['error', { allow: ['tron'] }],
    'react/prefer-stateless-function': ['off', { ignorePureComponents: true }],
    'react-hooks/exhaustive-deps': 'off',
    'no-nested-ternary': 'off',
    'react/jsx-curly-newline': 'off',
    'no-use-before-define': 'off',
    'react/require-default-props': 'off'
  },
  globals: {
    React: 'writable'
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/resolver': {}
  }
}
