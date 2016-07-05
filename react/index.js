module.exports = {
	'extends': '../index.js',
	parserOptions: {
		ecmaVersion: 7,
		ecmaFeatures: {
			jsx: true
		},
		sourceType: 'module'
	},
	plugins: [
		'react',
		'wpcalypso'
	],
	rules: {
		'react/jsx-uses-react': 2,
		'react/jsx-uses-vars': 2,
		'react/jsx-no-undef': 2,
		'react/jsx-no-duplicate-props': 2,
		'react/react-in-jsx-scope': 2,
		'react/no-danger': 2,
		'react/no-did-mount-set-state': 2,
		'react/no-did-update-set-state': 2,
		'react/no-is-mounted': 2,
		'react/jsx-no-bind': 2,
		'react/jsx-curly-spacing': [ 2, 'always' ]
	}
};
