module.exports = {
  roots: ["<rootDir>/src/tests"],
  transform: {
    "^.+\\.js$": "babel-jest",
    "^.+\\.mjs$": "babel-jest",
  },
  testEnvironment: "node",
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.js$",
  moduleFileExtensions: ["js", "mjs", "jsx", "json", "node"],
  moduleDirectories: ["node_modules", "src"],
};
