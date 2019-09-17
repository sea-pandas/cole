// specifies environment variables and other options
module.exports = {
  "verbose": true,
  "roots": [
    "<rootDir>/tests"
  ],
  "setupFilesAfterEnv": ["<rootDir>/__test__/jest-preload.js"],
}