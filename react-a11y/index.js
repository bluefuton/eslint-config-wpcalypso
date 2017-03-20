module.exports = {
	'extends': '../react/index.js',
	plugins: [
		'jsx-a11y'
	],
	rules: {
		'jsx-a11y/accessible-emoji': 1,
		// 'jsx-a11y/anchor-has-content' doesn't handle our translation system
		'jsx-a11y/aria-activedescendant-has-tabindex': 1,
		'jsx-a11y/aria-props': 1,
		'jsx-a11y/aria-proptypes': 1,
		'jsx-a11y/aria-role': 1,
		'jsx-a11y/aria-unsupported-elements': 1,
		'jsx-a11y/click-events-have-key-events': 1,
		'jsx-a11y/heading-has-content': 1,
		'jsx-a11y/href-no-hash': 1,
		'jsx-a11y/html-has-lang': 1,
		'jsx-a11y/iframe-has-title': 1,
		'jsx-a11y/img-has-alt': 1,
		'jsx-a11y/img-redundant-alt': 1,
		'jsx-a11y/label-has-for': 1,
		'jsx-a11y/lang': 1,
		'jsx-a11y/mouse-events-have-key-events': 1,
		'jsx-a11y/no-access-key': 1,
		// 'jsx-a11y/no-autofocus' Replace this with a rule that detects if all autofocus have a describedby
		'jsx-a11y/no-distracting-elements': 1,
		'jsx-a11y/no-onchange': 1,
		'jsx-a11y/no-redundant-roles': 1,
		// 'jsx-a11y/no-static-element-interactions' Not needed right now if the following two rules are set
		'jsx-a11y/onclick-has-focus': 1,
		'jsx-a11y/onclick-has-role': 1,
		'jsx-a11y/role-has-required-aria-props': 1,
		'jsx-a11y/role-supports-aria-props': 1,
		'jsx-a11y/scope': 1,
		'jsx-a11y/tabindex-no-positive': 1,
	}
};