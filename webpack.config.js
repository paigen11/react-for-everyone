module.exports = {
    entry:
        // look for file entry point in App.js file (can be array also)
        "./src/App.js",
    output: {
        path: __dirname,
        // this is what index.html is looking for
        filename: 'app.js'
    },
    module: {
        // looking for loaders
        loaders: [{
            // babel will look for any jsx files and compile them correctly
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets:
                    ['env', 'react']
            }
        }]
    }
};