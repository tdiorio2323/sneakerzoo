import nextPlugin from '@next/eslint-plugin-next';
import importPlugin from 'eslint-plugin-import';
import nextConfig from 'eslint-config-next';

export default [
  nextConfig,
  {
    // Configuration for Next.js
    files: ['app/**/*.{ts,tsx}', 'components/**/*.{ts,tsx}'],
    plugins: {
      '@next/next': nextPlugin,
      import: importPlugin,
    },
    rules: {
      '@next/next/no-img-element': 'off',
      'import/no-named-default': 'error',
      'import/no-named-as-default': 'error',
    },
  },
  // Add other configurations if needed
];