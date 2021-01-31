
let config = {
    // 可选参数，生成template.ejs路径。默认生成到public根目录下
    outputPath: '',
    // 可选参数，需要插入到template.ejs文件的内容
    //插入到head标签末尾
    head: `<script>
            webpackPublicPath = "<%= htmlWebpackPlugin.options.publicPath || '' %>";
        </script>`,
    // 插入到body开始标签之后
    bodyStart: '',
    // 插入到body结束标签之前
    bodyEnd: '',
};

module.exports = config;
