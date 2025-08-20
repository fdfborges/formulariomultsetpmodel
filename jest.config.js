module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFilesAfterEnv: ['<rootDir>/.jest/setup-tests.js'],
    moduleNameMapper: {
        '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/.jest/mocks/fileMock.js',
        '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
        '^react-router-dom$': '<rootDir>/.jest/mocks/react-router-dom.js'
    },
    transformIgnorePatterns: [
        "/node_modules/(?!react-router|react-router-dom)"
    ],
    transform: {
        "^.+\\.[t|j]sx?$": "babel-jest"
    }
}