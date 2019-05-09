const path = require('path');

module.exports = {
    name: 'word-relay-setting',
    mode: 'development', // 실서비스: production으로 바꾸면 됨
    devtool: 'eval',
    resolve: {
        extensions: ['.js', '.jsx']
    },

    entry: { // 중요!
        app: ['./client.jsx'],
    }, // 입력

    module: {
        rules: [{
            test: /\.jsx?/,
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env', '@babel/preset-react'],
                plugins: ['@babel/plugin-proposal-class-properties'],
            },
        }],
    },

    output: { // 중요!
        path: path.join(__dirname, 'dist'), // path는 dist 폴더가 된다
        filename: 'app.js',
    }, // 출력
};