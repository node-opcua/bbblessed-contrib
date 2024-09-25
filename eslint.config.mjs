import globals from "globals";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [...compat.extends("eslint:recommended"), {
    languageOptions: {
        globals: {
            ...globals.node,
        },

        ecmaVersion: 2015,
        sourceType: "commonjs",
    },

    rules: {
        "brace-style": "error",
        "no-irregular-whitespace": "error",
        "no-octal-escape": "error",
        "no-octal": "error",
        "no-proto": "error",
        strict: ["error", "global"],
        "no-undef": "error",
        "no-use-before-define": "off",
        indent: ["error", 2],
        semi: [2, "always"],
        quotes: [2, "single"],
    },
}];