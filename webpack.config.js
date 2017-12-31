module.exports = {
    entry: __dirname + "/index.js", //已多次提及的唯一入口文件
    output: {
        path: __dirname + "/build",
        filename: "bundle.js"
    }
}