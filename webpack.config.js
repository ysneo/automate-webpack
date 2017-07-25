module.exports = function (env) {
    const file = `./webpack.${env}.js`
    console.log(`load ${file}`);
    return require(file)
}