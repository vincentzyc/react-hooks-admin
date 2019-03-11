// const { override, fixBabelImports, addLessLoader } = require('customize-cra');
const { override, fixBabelImports } = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    // style: true,
    style: 'css',
  })
  // addLessLoader({
  //   javascriptEnabled: true,
  //   modifyVars: { '@primary-color': '#25b864' },  // 主题设置
  // }),
);