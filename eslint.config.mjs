import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import eslintPluginPrettier from "eslint-plugin-prettier/recommended"

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
  //   env: {
  //     browser: true,
  //     es2021: true,
  // },
  // extends: [
  //     'plugin:react/recommended',
  //     'airbnb',
  // ],
  // parser: '@typescript-eslint/parser',
  // parserOptions: {
  //     ecmaFeatures: {
  //         jsx: true,
  //     },
  //     ecmaVersion: 'latest',
  //     sourceType: 'module',
  // },
  // plugins: [
  //     'react',
  //     '@typescript-eslint',
  // ],
    rules: {
      'react/jsx-indent': [2, 2],
      'react/jsx-indent-props': [2, 2],
      indent: [2, 2],
      'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }],
      'import/no-unresolved': 'off',
      'import/prefer-default-export': 'off',
      'no-unused-vars': 'warn',
      'react/require-default-props': 'off',
      'react/react-in-jsx-scope': 0,
      'react/jsx-props-no-spreading': 'warn',
      'react/function-component-definition': 'off',
      'no-shadow': 'off',
      'import/extensions': 'off',
      'import/no-extraneous-dependencies': 'off',
      'no-underscore-dangle': 'off',
    },
    // globals: {
    //     __IS_DEV__: true,
    // },
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]
  },
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  pluginReact.configs.flat['jsx-runtime'],
];