import { cdktf } from "projen";
const project = new cdktf.ConstructLibraryCdktf({
  author: "Nathan Cazell",
  authorAddress: "nathan.cazell@kikoda.com",
  cdktfVersion: "^0.8.3",
  defaultReleaseBranch: "main",
  devContainer: true,
  docgen: true,
  name: "kikoda-cdktf-constructs",
  prettier: true,
  projenrcTs: true,
  repositoryUrl: "https://github.com/nathan.cazell/kikoda-cdktf-constructs.git",
  vscode: true,

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();