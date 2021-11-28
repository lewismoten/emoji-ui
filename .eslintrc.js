/* eslint-env node */
module.exports = {
  env: {
    es6: true,
    browser: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parserOptions: {
    parser: "babel-eslint",
    sourceType: "module",
    ecmaVersion: 2021,
  },
};
