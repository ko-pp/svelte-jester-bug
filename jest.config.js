/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {
  roots: ["<rootDir>/src"],

  clearMocks: true,

  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{js,svelte}", "!**/node_modules/**"],

  moduleDirectories: ["node_modules", "src"],
  moduleFileExtensions: ["js", "svelte"],
  transform: {
    "^.+\\.js$": "babel-jest",
    "^.+\\.svelte$": ["svelte-jester", { preprocess: false }],
  },
};
