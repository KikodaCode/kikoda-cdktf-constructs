[<img src="https://kikoda.com/wp-content/uploads/2019/07/Logo_White_bg.svg" width="300"/>](https://kikoda.com)
# Kikoda CDKTF Constructs Library

[![NPM](https://img.shields.io/npm/v/@kikoda/cdktf-constructs?color=39a356)](https://www.npmjs.com/package/@kikoda/cdktf-constructs)
[![License](https://img.shields.io/badge/license-Apache--2.0-blue)](https://github.com/KikodaCode/kikoda-cdktf-constructs.git/blob/main/LICENSE)

Use this Kikoda CDKTF Constructs Library to architect and model modern applications

## Install from NPM:
```
yarn add --dev @kikoda/cdktf-constructs

# or

npm install @kikoda/cdktf-constructs --save-dev
```

## Usage
#### Configured Stacks
With the `ConfiguredStack` construct you can pass arbitrary environmental configuration to your CDK App. This is useful when you want to define and use a type-safe configuration object in your nested Constructs.

```typescript
import { App } from 'cdktf';
import { ConfiguredStack, ConfiguredStackProps } from '@kikoda/cdktf-constructs';
import { Construct } from 'constructs';

interface Config {
  foo: string;
}

class MyConstruct extends Construct {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    /*
     * Get a config value in a child stack or construct
     */
    const stack = ConfiguredStack.extOf<Config>(this);

    new Resource(this, 'Resource', {
      foo: stack.config.foo,
    });
  }
}

class MyStack<T> extends ConfiguredStack<T> {
  constructor(scope: Construct, id: string, props: ConfiguredStackProps<T>) {
    super(scope, id, props);

    new MyConstruct(this, 'MyConstruct');
  }
}

/*
 * Use the ConfiguredStack in your App
 */
const app = new App();
const stack = new MyStack<Config>(app, 'DevStack', {
  stackName: 'dev',
  config: {
    foo: 'bar',
  },
});

app.synth();
```

## Opening Issues

If you encounter a bug with this package, we want to hear about it. Before opening a new issue, search the existing issues to avoid duplicates.

When opening an issue, include the Kikoda Construct Library version, Node version, and stack trace if available. In addition, include the steps to reproduce when appropriate.

You can also open an issue for a feature request.

## Contributing

If you find an issue with this package and have a fix, please feel free to open a pull request following the [procedures](CONTRIBUTING.md).

## Testing

If you contribute to this package you can run the tests using `yarn test`.

## License

Unless explicitly stated otherwise all files in this repository are licensed under the Apache License Version 2.0.

This product includes software developed at Kikoda (https://www.kikoda.com). Copyright 2022 Kikoda, LLC.
