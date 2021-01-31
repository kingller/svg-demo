module.exports = {
    // 注意在开发中使用本地的`hrone-react`可能导致某些模块被加载两次而出现错误
    // 'hrone-react': `${__dirname}/../../hrone-react`,
    'hrone-react': `${__dirname}/node_modules/hrone-react`,
    react: `${__dirname}/node_modules/react`,
    'react-dom': `${__dirname}/node_modules/react-dom`,
    mobx: `${__dirname}/node_modules/mobx`,
    i18next: `${__dirname}/node_modules/i18next`,
    i18n: `${__dirname}/src/i18n/index.ts`,
    ajax: `${__dirname}/src/js/ajax.ts`,
};
