module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    'prettier',
    "prettier/@typescript-eslint",
		"plugin:prettier/recommended"
  ],
  plugins: ["jest"],
  // add your custom rules here
  rules: {
    "indent": [2, 4, {"SwitchCase": 1}],
		"no-underscore-dangle" : "off",
		"linebreak-style": ["error", "unix"],
		"quotes": ["error", "double"],
		"semi": ["error", "always"],
		"comma-dangle": [
			"error",
			{
				arrays: "always-multiline",
				objects: "always-multiline",
				imports: "always-multiline",
				exports: "always-multiline",
				functions: "never",
			},
		],
		"no-cond-assign": ["error", "always"],
		"no-console": "off",
		"prettier/prettier": [
			"error",
			{
				endOfLine: "auto",
			},
		],
    "import/no-extraneous-dependencies": "off",
		"no-param-reassign": "off",
		"@typescript-eslint/no-unused-vars":  "off"
  },
}
