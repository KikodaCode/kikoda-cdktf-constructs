import { cdktf, TextFile } from 'projen';
import { TrailingComma, ArrowParens, EndOfLine } from 'projen/lib/javascript';

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
  prettierOptions: {
    settings: {
      printWidth: 100,
      tabWidth: 2,
      useTabs: false,
      semi: true,
      singleQuote: true,
      trailingComma: TrailingComma.ALL,
      arrowParens: ArrowParens.AVOID,
      endOfLine: EndOfLine.LF,
    },
  },
  tsconfig: { compilerOptions: { esModuleInterop: true } },
  jestOptions: {
    jestConfig: {
      setupFilesAfterEnv: ['./setup.js'],
    },
  },

  // deps: [],                /* Runtime dependencies of this module. */
  // bundledDeps: [],
  // devDeps: [] /* Build dependencies for this module. */,
  // gitignore: [],
  pullRequestTemplateContents: [
    `## Proposed changes`,
    '',
    `_Describe the big picture of your changes here to communicate to the maintainers why we should accept this pull request.If it fixes a bug or resolves a feature request, be sure to link to that issue._`,
    '',
    `### Commentary`,
    '',
    `_Anything else we should know when reviewing?_`,
    '',
    `### Types of Changes`,
    '',
    `What types of changes does your code introduce? _Chedk all the boxes that apply_`,
    '',
    `- [ ] Bugfix(non - breaking change which fixes an issue)`,
    `- [ ] New feature or Enhancement(non - breaking change which adds functionality)`,
    `- [ ] Breaking change(fix or feature that would cause existing functionality to not work as expected)`,
    `- [ ] Chore(documentation, refactoring, dependency upgrade, etc.)`,
    '',
    `### Chores`,
    '',
    `_Check all the boxes that apply_`,
    '',
    `- [ ] This PR includes breaking changes which are documented in the description and associated commit messages(see the[Contributing Guide](../ CONTRIBUTING.md) for more information on how this should be done)`,
    `- [ ] This PR impacts documentation, and it has been updated(or an issue has been created and linked)`,
    `- [ ] This PR's changes are covered by the automated tests`,
  ],
});

// Generate a NOTICE file for license
new TextFile(project, 'NOTICE', {
  marker: false,
  lines: [
    'Kikoda CDKTF Constructs Library',
    'Copyright 2022-2022 Kikoda, LLC',
    '',
    'This product includes software developed at Kikoda (https://www.kikoda.com)',
  ],
});

project.synth();
