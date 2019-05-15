// const { override, fixBabelImports, addLessLoader } = require('customize-cra');
const { override, fixBabelImports, addWebpackAlias } = require('customize-cra');

const path = require("path");

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    // style: true,
    style: 'css',
  }),
  addWebpackAlias({
    '@': path.resolve(__dirname, "src")
  })
  // addLessLoader({
  //   javascriptEnabled: true,
  //   modifyVars: { '@primary-color': '#25b864' },  // 主题设置
  // }),
);