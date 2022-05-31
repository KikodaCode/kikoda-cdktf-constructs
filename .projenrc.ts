import { KikodaOpenSourceProject, KikodaStandards } from '@kikoda/projen-templates';
import { cdktf } from 'projen';
import { GithubCredentials } from 'projen/lib/github';

const project = new cdktf.ConstructLibraryCdktf({
  name: 'kikoda-cdktf-constructs',
  packageName: '@kikoda/cdktf-constructs',
  description:
    'Collection of useful platform constructs for modern applications deployed with CDKTF',
  author: 'Kikoda, LLC',
  authorAddress: 'platform@kikoda.com',
  repositoryUrl: 'https://github.com/KikodaCode/kikoda-cdktf-constructs.git',
  defaultReleaseBranch: 'main',
  keywords: ['cdktf', 'compliance', 'configuration', 'websites', 'scaffolding', 'cicd'],
  stability: 'experimental',
  license: 'Apache-2.0',
  cdktfVersion: '^0.8.3',
  projenrcTs: true,
  devContainer: true,
  vscode: true,
  docgen: true,
  prettier: true,
  prettierOptions: KikodaStandards.PrettierOptions,
  tsconfig: { compilerOptions: { esModuleInterop: true } },
  jestOptions: {
    jestConfig: {
      setupFilesAfterEnv: ['./setup.js'],
    },
  },

  // deps: [] /* Runtime dependencies of this module. */,
  // bundledDeps: [],
  devDeps: ['@kikoda/projen-templates'] /* Build dependencies for this module. */,
  // gitignore: [],
  pullRequestTemplate: false,
  githubOptions: {
    projenCredentials: GithubCredentials.fromApp(),
  },
});

new KikodaOpenSourceProject(project, { title: 'Kikoda CDKTF Constructs Library' });

project.synth();
