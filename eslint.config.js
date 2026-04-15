import js from "@eslint/js";
import globals from "globals";

export default [
  {
    files: ["src/**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "commonjs",
      globals: {
        ...globals.node, // adiciona todas as variáveis globais do Node (console, process, etc.)
      },
    },
    rules: {
      ...js.configs.recommended.rules,
      "no-console": "warn",
      "semi": ["error", "always"],
      "quotes": ["error", "double"]
    },
  },
];
