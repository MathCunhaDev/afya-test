import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  verbose: true,
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  setupFilesAfterEnv: [
    "<rootDir>/src/setup/tests/setup.ts",
    "jest-styled-components",
  ],
  testEnvironment: "jsdom",
  moduleDirectories: ["node_modules", "<rootDir>"],
  moduleNameMapper: {
    "^~common/assets/svgs/(.*)$": "<rootDir>/src/setup/mocks/fileMock.ts",
    "\\.(png|jpg|jpeg|gif|webp|svg)$": "<rootDir>/src/setup/mocks/fileMock.ts",
    "^~common/(.*)$": "<rootDir>/src/common/$1",
  },
  transformIgnorePatterns: ["/node_modules/", "^.+\\.svg$"],
};
export default config;
