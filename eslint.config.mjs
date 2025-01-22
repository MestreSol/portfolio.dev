import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends( "next",
    "next/typescript",
    "next/core-web-vitals",
    "plugin:prettier/recommended",
    "plugin:@next/next/recommended",
    "plugin:react-hooks/recommended",
    "plugin:eslint-plugin-react/recommended",),
];

export default eslintConfig;
