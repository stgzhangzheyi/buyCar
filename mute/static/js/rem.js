export function rem(designWidth) {
		//designWidth: 设计稿的宽度
		designWidth = designWidth || 640;

    //页面宽度
    //html: document.documentElement
    //实现稿宽度
    var htmlWidth = document.documentElement.getBoundingClientRect().width;

    //手机端最大安全宽度 640
    var maxWidth = 640;

    //确保在手机端生效
    if (htmlWidth <= maxWidth) {

        //动态计算html元素的字体大小 font-size, 并且放大100倍

        var rem = htmlWidth / designWidth * 100;

        var style = document.createElement('style');

        style.textContent = 'html{font-size: ' + rem + 'px;}';

        document.getElementsByTagName('head')[0].appendChild(style);

    }

}