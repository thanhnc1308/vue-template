module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ?
        '/production-sub-path/' : '/',
    devServer: {
        overlay: {
            warnings: true,
            errors: true
        }
    },
    configureWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            // mutate config for production...
            // eslint-disable-next-line no-console
            console.log(config);
        } else {
            // mutate for development...
        }
    }
}