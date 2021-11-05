module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        modules: false
      }
    ],
    "@babel/preset-react"
  ],
  plugins: [
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-syntax-dynamic-import",
    "@babel/plugin-transform-runtime"
  ],
  env: {
    production: {
      only: ["src"],
      plugins: [
        [
          "transform-react-remove-prop-types",
          {
            removeImport: true
          }
        ],
        "@babel/plugin-transform-react-constant-elements",
        "@babel/plugin-transform-react-inline-elements"
      ]
    }
  }
};
