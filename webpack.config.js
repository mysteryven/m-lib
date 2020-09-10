const path = require('path');

module.exports = {
    entry: {
        'm-lib': './src/index.ts'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    output: {
        path: path.resolve(__dirname, './dist/'),
        library: 'm-lib',
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            {
                test: /\.ts?$/,
                loader: 'ts-loader',
                options: {

                }
            }
        ]
    }
};
