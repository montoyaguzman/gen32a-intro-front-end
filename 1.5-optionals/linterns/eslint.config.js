import globals from "globals";


export default [
  {
    languageOptions: { globals: globals.browser },
    rules:{
      "no-console": "off",
      "no-unused-vars": "error",
      "indent": ["warn", 4],
      "quotes": ["warn", "double"],
    }
  },
  
];