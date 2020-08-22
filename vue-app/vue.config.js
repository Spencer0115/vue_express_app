const config = module.exports = {
    devServer: {
        clientLogLevel: 'info',
        proxy: {
            '/api': {
                target: 'http://localhost:3000',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }

    }
}

