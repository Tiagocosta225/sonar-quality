module.exports = {
  testEnvironment: 'node',
  testTimeout: 10000,
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.js',
    '!src/app.js', // opcional: excluir app.js se for só bootstrap
  ],
  coverageDirectory: 'coverage',
  coverageReporters: ['lcov', 'text-summary'],
  testMatch: ['<rootDir>/tests/**/*.test.js'],
};
