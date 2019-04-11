module.exports = {
  "env": {
    "es6": true,
    "browser": true,
    "node": true
  },
  "rules": {
    "jest/valid-expect": [1],
    "react/display-name": [2],
    "no-undef": [ 2 ],
    "react/prop-types": [1],
    "eqeqeq": [2, "always"],
    "quotes": [
      1,
      "single",
      { "avoidEscape": true }
  ],
  "semi": [
      1,
      "never"
  ],
  "react/no-unused-prop-types": [2] 
  },
  "extends": ["eslint:recommended", "plugin:react/recommended", "plugin:jest/recommended"],
  "plugins": [ "react", "jest" ],
  "parser": "babel-eslint",
  "parserOptions": {
    "sourceType": "module",
    "ecmaFeatures": {
        "jsx": true,
        "experimentalObjectRestSpread": true
    }
  }
}