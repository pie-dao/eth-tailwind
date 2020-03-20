# @pie-dao/eth-tailwind

## Installation

`yarn add @pie-dao/eth-tailwind`

```
/* tailwind.config.js */
const eth = require('@pie-dao/eth-tailwind');
const piedao = require('@pie-dao/tailwind');

module.exports = {
  theme: {},
  variants: {},
  plugins: [piedao, eth],
}
```

## Commands

### yarn lint

Runs the linter to make sure all is well with the world. Please make sure to do this prior to
submitting any PRs. Code which fails linting will be rejected.

### yarn release

Lints and the publishes the to npmjs.org.

## Development

https://reactjs.org/warnings/invalid-hook-call-warning.html#duplicate-react

Note: When developing locally using yarn link, make sure to link react as well:

```
This problem can also come up when you use npm link or an equivalent. In that case, your bundler might “see” two Reacts — one in application folder and one in your library folder. Assuming myapp and mylib are sibling folders, one possible fix is to run npm link ../myapp/node_modules/react from mylib. This should make the library use the application’s React copy.
```
