module.exports = {
  lintOnSave: false,
  configureWebpack: {
    resolve: {
      modules: ['node_modules'],
      extensions: ['.js', '.vue', '.jsx', '.tsx', '.json', '.css', '.scss'], // 按顺序解析这些后缀名
      alias: {
        '@': resolve('src/components'),
        '@styles': resolve('src/styles')
      }
    },
  }
}
