const path = require("path");

module.exports = {
  entry: "./src/game.js", // Assuming your main JavaScript file is named 'index.js'
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "src"), // Output to a 'dist' directory (recommended)
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
