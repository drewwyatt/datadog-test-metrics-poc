module.exports = {
  preset: 'ts-jest',
  reporters: ['default', '<rootDir>/dist/reporter.js'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
}
