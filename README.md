eslint-config-wpcalypso
=======================

An ESLint configuration following WordPress.com's "Calypso" [JavaScript Coding Guidelines](https://github.com/Automattic/wp-calypso/blob/master/docs/coding-guidelines/javascript.md).

## Usage

You should install this configuration and peer dependencies as `devDependencies` in your project:

```
npm install --save-dev eslint-config-wpcalypso eslint eslint-plugin-wpcalypso
```

If you're planning to use the React superset of rules, you should also install `eslint-plugin-react`:

```
npm install --save-dev eslint-plugin-react
```

Next, simply extend the configuration from your project's `.eslintrc` file:

```
"extends": "wpcalypso"
```

Or, if your project uses React and you want to opt in to additional React-specific rules, extend the React superset:

```
"extends": "wpcalypso/react"
```

Another set of rules available is the `react-a11y` set, which contains the base rules, the react rules, and a set of accessibility checks. To use these:

```
"extends": "wpcalypso/react-a11y"
```

For these accessibility rules, you will need to also install [the jsx-a11y plugin](https://github.com/evcohen/eslint-plugin-jsx-a11y):

```
npm install --save-dev eslint-plugin-jsx-a11y
```

Refer to the [ESLint documentation on Shareable Configs](http://eslint.org/docs/developer-guide/shareable-configs) for more information.

## Suggesting Changes

Want to suggest a change to our style guide? [Edit the JavaScript Coding Guidelines on the Automattic/wp-calypso repository](https://github.com/Automattic/wp-calypso/edit/master/docs/coding-guidelines/javascript.md) and submit a pull request.

Want to revise the ESLint rules used here? [Edit the `index.js` file](https://github.com/Automattic/eslint-config-wpcalypso/edit/master/index.js) and submit a pull request.

## License

Calypso is licensed under [GNU General Public License v2 (or later)](./LICENSE.md).
