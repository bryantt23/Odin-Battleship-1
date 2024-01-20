const path = require("path");

module.exports = {
  mode: 'development',
  entry: "./src/index.js", // Assuming your main JavaScript file is named 'index.js'
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"), // Output to a 'dist' directory (recommended)
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Match JavaScript files
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.css$/, // Match CSS files
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
