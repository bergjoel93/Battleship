module.exports = {
  roots: ["<rootDir>/src/tests"],
  transform: {
    "^.+\\.js$": "babel-jest",
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.js$",
  moduleFileExtensions: ["js", "jsx", "json", "node"],
};
