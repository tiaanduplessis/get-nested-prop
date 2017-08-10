<h1 align="center">get-nested-prop</h1>
<div align="center">
  <strong>Get a nested prop using dot-notation with a optional default value as fallback</strong>
</div>
<br>
<div align="center">
  <a href="https://npmjs.org/package/get-nested-prop">
    <img src="https://img.shields.io/npm/v/get-nested-prop.svg?style=flat-square" alt="Package version" />
  </a>
  <a href="https://npmjs.org/package/get-nested-prop">
  <img src="https://img.shields.io/npm/dm/get-nested-prop.svg?style=flat-square" alt="Downloads" />
  </a>
  <a href="https://github.com/feross/standard">
    <img src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square" alt="Standard" />
  </a>
  <a href="https://travis-ci.org/tiaanduplessis/get-nested-prop">
    <img src="https://img.shields.io/travis/tiaanduplessis/get-nested-prop.svg?style=flat-square" alt="Travis Build" />
  </a>
  <a href="https://github.com/RichardLitt/standard-readme)">
    <img src="https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square" alt="Standard Readme" />
  </a>
  <a href="https://badge.fury.io/gh/tiaanduplessis%2Fget-nested-prop">
    <img src="https://badge.fury.io/gh/tiaanduplessis%2Fget-nested-prop.svg?style=flat-square" alt="GitHub version" />
  </a>
  <a href="https://dependencyci.com/github/tiaanduplessis/get-nested-prop">
    <img src="https://dependencyci.com/github/tiaanduplessis/get-nested-prop/badge?style=flat-square" alt="Dependency CI" />
  </a>
  <a href="https://github.com/tiaanduplessis/get-nested-prop/blob/master/LICENSE">
    <img src="https://img.shields.io/npm/l/get-nested-prop.svg?style=flat-square" alt="License" />
  </a>
  <a href="http://makeapullrequest.com">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="PRs" />
  </a>
  <a href="https://www.paypal.me/tiaanduplessis/1">
    <img src="https://img.shields.io/badge/$-support-green.svg?style=flat-square" alt="Donate" />
  </a>
</div>
<br>
<div align="center">
  <a href="https://github.com/tiaanduplessis/get-nested-prop/watchers">
    <img src="https://img.shields.io/github/watchers/tiaanduplessis/get-nested-prop.svg?style=social" alt="Github Watch Badge" />
  </a>
  <a href="https://github.com/tiaanduplessis/get-nested-prop/stargazers">
    <img src="https://img.shields.io/github/stars/tiaanduplessis/get-nested-prop.svg?style=social" alt="Github Star Badge" />
  </a>
  <a href="https://twitter.com/intent/tweet?text=Check%20out%20get-nested-prop!%20https://github.com/tiaanduplessis/get-nested-prop%20%F0%9F%91%8D">
    <img src="https://img.shields.io/twitter/url/https/github.com/tiaanduplessis/get-nested-prop.svg?style=social" alt="Tweet" />
  </a>
</div>
<br>
<div align="center">
  Built with ❤︎ by <a href="tiaan.beer">Tiaan</a> and <a href="https://github.com/tiaanduplessis/get-nested-prop/graphs/contributors">contributors</a>
</div>

<h2>Table of Contents</h2>
<details>
  <summary>Table of Contents</summary>
  <li><a href="#install">Install</a></li>
  <li><a href="#usage">Usage</a></li>
  <li><a href="#contribute">Contribute</a></li>
  <li><a href="#license">License</a></li>
</details>

## Install

```sh
$ npm install --save get-nested-prop
# OR
$ yarn add get-nested-prop
```

## Usage

```js
const getNestedProp = require('get-nested-prop')

const obj = {
  foo: {
    bar: {
      baz: 5
    }
  }
}

console.log(getNestedProp(obj, 'foo.bar.baz')) // 5
console.log(getNestedProp(obj, 'foo.bar.baz.boo', 5))  // 5
```

## Contribute

Contributions are welcome. Please open up an issue or create PR if you would like to help out.

Note: If editing the README, please conform to the [standard-readme](https://github.com/RichardLitt/standard-readme) specification.

## License

Licensed under the MIT License.
