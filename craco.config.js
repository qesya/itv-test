const path = require('path');
const SRC = './src';

const alias = (prefix = 'src') => ({
  '@/api': `${prefix}/api`,
  '@/components': `${prefix}/components`,
  '@/UI': `${prefix}/components/UI`,
  '@/config': `${prefix}/config`,
  '@/assets': `${prefix}/assets`,
  '@/utils': `${prefix}/utils`,
  '@/SVGs': `${prefix}/assets/SVGs`,
  '@/services': `${prefix}/services`,
  '@/hooks': `${prefix}/hooks`,
});
const aliases = alias(SRC);

const resolvedAliases = Object.fromEntries(
  Object.entries(aliases).map(([key, value]) => [
    Object.entries(alias('./src')).map(([key, value]) => [
      key,
      path.resolve(__dirname, value),
    ]),
  ])
);

const resolvedJestAliases = Object.fromEntries(
  Object.entries(alias('<rootDir>/src')).map(([key, value]) => [
    `^${key}/(.*)$`,
    `${value}/$1`,
  ])
);

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  jest: {
    configure: {
      verbose: true,
      moduleNameMapper: {
        '^@/(.+)': '<rootDir>/src/$1',
      },
    },
  },
};
