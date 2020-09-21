const webpackDevServer = require('webpack-dev-server');
const webpackConfig=require("./webpack.config.js");
const webpack = require('webpack');
const fs = require('fs');
const path = require('path');
let options={
    contentBase: path.resolve(__dirname,'../dist'),
    // hot: true,
    // https: {
    //     key: fs.readFileSync(path.join(__dirname, './cert/privatekey.pem')),
    //     cert: fs.readFileSync(path.join(__dirname, './cert/certificate.pem'))
    // }
}
webpackDevServer.addDevServerEntrypoints(webpackConfig, options);
const compiler = webpack(webpackConfig);
const server = new webpackDevServer(compiler, options);
server.listen(3999, () => {
    console.log('dev server listening on port 3999');
});
