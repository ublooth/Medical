module.exports = {
    devServer: {
        port: 8082,
        proxy: {
            '/test/*': {
                target: "https://doctor.isuncare.cn",
                secure: false
            }
        }
    }
}