export default {
  files: [
    'src/**/*.spec.js',
  ],
  concurrency: 5,
  failFast: true,
  failWithoutAssertions: false,
  environmentVariables: {
    NODE_ENV: 'development',
  },
  verbose: true,
  nodeArguments: [
    '--experimental-modules',
    '--experimental-specifier-resolution=node',
  ],
};
