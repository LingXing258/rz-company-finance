module.exports = {
    plugins: {
        'postcss-pxtorem': {
            rootValue() {
                return 37.5;
            },
            propList: ['*'],
        },
    },

}