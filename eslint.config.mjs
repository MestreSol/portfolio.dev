const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname
})

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript', 'prettier'),
  {
    plugins: {
      prettier: prettierPlugin,
      react: reactPlugin,
      'react-hooks': reactHooksPlugin
    },
    rules: {
      'prettier/prettier': ['error', { endOfLine: 'lf' }],
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/no-explicit-any': 'off'
    },
    ignores: ['.next', 'node_modules']
  }
]

export default eslintConfig
