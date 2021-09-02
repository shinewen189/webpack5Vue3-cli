module.exports = function (prodMode) {
    return [
        {
            test: /\.vue$/,
            use: ['vue-loader']
        },
        //babel-loader
        {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        },
        // css-loader

        {
            test: /\.less$/,
            use: ['style-loader', 'css-loader', 'less-loader'] // 从右向左解析原则
        },
        //webpack.rules.conf.js
        {
            test: /\.(css|scss|sass)$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }


    ]

}
