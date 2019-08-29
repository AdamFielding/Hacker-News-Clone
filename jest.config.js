module.exports = {
  clearMocks: true,
  coverageDirectory: "coverage",
  globals: {
    "ts-jest": {
      tsConfig: "tsconfig.json"
    }
  },
  moduleFileExtensions: ["ts", "tsx", "js"],
  testMatch: ["**/*.spec.+(ts|tsx|js)"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest"
  }
};
