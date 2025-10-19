import globals from "globals"
import eslint from "@eslint/js"
import tseslint from "typescript-eslint"
import { fixupPluginRules } from "@eslint/compat"
import eslintPluginReact from "eslint-plugin-react"
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended"
import eslintPluginReactHooks from "eslint-plugin-react-hooks"
import perfectionist from "eslint-plugin-perfectionist"

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  eslintPluginPrettierRecommended,
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  {
    languageOptions: {
      globals: { ...globals.browser },
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
  },
  {
    plugins: {
      perfectionist,
      react: eslintPluginReact,
      "react-hooks": fixupPluginRules(eslintPluginReactHooks),
    },
  },
  {
    rules: {
      // ...
      ...eslintPluginReactHooks.configs.recommended.rules,
      "@typescript-eslint/no-unused-vars": [
        "warn", // or "error"
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/no-explicit-any": "off",
      "perfectionist/sort-imports": [
        "error",
        {
          type: "alphabetical",
        },
      ],
      "perfectionist/sort-exports": [
        "error",
        {
          type: "alphabetical",
        },
      ],
      "perfectionist/sort-interfaces": [
        "error",
        {
          type: "alphabetical",
        },
      ],
      "perfectionist/sort-objects": [
        "error",
        {
          type: "alphabetical",
        },
      ],
    },
  },
  {
    settings: {
      perfectionist: {
        partitionByComment: true,
        type: "line-length",
      },
    },
  },
  {
    ignores: ["*.config.*", "dist"],
  },
)
