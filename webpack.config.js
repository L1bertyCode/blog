const path =require("path");

module.exports={
  mode:"development",
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name][contenthash].js',
    clean:true
  },
}