module.exports = {
    rootDir: '../',
    testURL: 'http://localhost/',
    clearMocks: true,
    setupFiles: [
        '<rootDir>/jest/jest.setup.js',
    ],
    moduleNameMapper: {
        '\\.(css|scss|jpg|png|gif)$': '<rootDir>/jest/jest.mock.js',
    },
    modulePaths: [
        '<rootDir>/',
    ],
};
