module.exports = {
    "extends": "airbnb",
    "env":{
        "browser":true,
    },
    "rules": {
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "react/prefer-stateless-function": "off",
        "jsx-a11y/no-static-element-interactions":0,
        "jsx-a11y/click-events-have-key-events":0,
    },
};