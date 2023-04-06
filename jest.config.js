module.exports = {
  clearMocks: true,
  moduleFileExtensions: ['js', 'ts', 'tsx'],
  testEnvironment: 'node',
  testRunner: 'jest-circus/runner',
  transform: {
    '^.+\\.ts$': 'babel-jest',
    '^.+\\.tsx$': 'babel-jest',
  },
  collectCoverage: true,
  projects: [
    {
      name: 'aws-ssm-secrets',
      displayName: 'aws-ssm-secrets',
      testRegex: '__tests__',
      setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    },
  ],
  coverageReporters: ['text'],
  coverageThreshold: {
    global: {
      lines: 100,
    },
  },
  collectCoverageFrom: ['src/main.ts', '!**/__tests__/**', '!**/dist/**'],
};
