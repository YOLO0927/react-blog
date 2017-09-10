module.exports = {
  root: true,
  parser: "babel-eslint",
  env: {
    "browser": true,
    "node": true
  },
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  "extends": "airbnb",
  "plugins": [
    "react",
    "jsx-a11y"
  ],
  "rules": {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/jsx-uses-vars": "error",
    "no-debugger": process.env.NODE_ENV === 'production' ? 2 : 0,
    "no-console": process.env.NODE_ENV === 'production' ? 2 : 0,
    "linebreak-style": 0,
    "comma-dangle": ["error", "never"],
    "space-before-function-paren": ["error", "always"],
    "react/forbid-prop-types": 0,
    "no-restricted-syntax": 0
  }
}
