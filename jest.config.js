// specifies environment variables and other options
module.exports = {
  "verbose": true,
  "roots": [
    "<rootDir>/__test__"
  ],
  "setupFilesAfterEnv": ["<rootDir>/__test__/jest-preload.js"],
}