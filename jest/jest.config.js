module.exports = {
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json'
    }
  },
  rootDir: '../src',
  collectCoverage: true,
  coverageDirectory: '../coverage',
  moduleFileExtensions: ['ts', 'tsx','js'],
  transformIgnorePatterns: ['^.+\\.js$'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },
  testMatch: ['**/?(*.)+(spec|test).ts?(x)'],
  testEnvironment: 'jsdom'
}