module.exports = {
  'plugins': [
    ['import', {
      'libraryName': 'antd',
      'libraryDirectory': 'es',
      'style': 'css'
    }, 'import-antd'],
    // 为api提供沙箱的垫片方案，不会污染全局的 api
    ['@babel/plugin-transform-runtime'],
    // 修饰器
    ['@babel/plugin-proposal-decorators', { 'legacy': true }],
    ['@babel/plugin-proposal-class-properties'],
    // asyn await 支持
    '@babel/plugin-transform-async-to-generator',
    // Webpack4 动态导入文件
    '@babel/plugin-syntax-dynamic-import',
  ],
  'presets': [
    '@babel/preset-react',
    '@babel/preset-env'
  ]
}
