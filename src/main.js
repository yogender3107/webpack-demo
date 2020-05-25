require('@babel/plugin-transform-runtime');
require("webpack-hot-middleware/client?reload=true");
require('./main.css');
require('./index.html');

var a = async (args) => {
  const { a, b } = args;
  await console.log('arguments of es6 ', a, b);
  console.log('done');
};

a({ a: 1, b: 2 });
