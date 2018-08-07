define(function() {
    var oBanner = document.querySelector('.banner'); // 获取这个大盒子
    var oUl = oBanner.getElementsByTagName('ul')[0]; // 图片的ul
    var aLi = oUl.getElementsByTagName('li'); // 每个图
    var aSpan = oBanner.querySelectorAll('span'); // 每个小球
    var oLeft = oBanner.querySelector('.left'); // 左按钮
    var oRight = oBanner.querySelector('.right'); // 右按钮
    var num = 0; // 关键，先改num，改完之后，调运动函数
    var timer = null; // 时间对象
    // 一打开，就自动轮播
    // console.log(oBanner)
    timer = setInterval(auto, 2000);
    // 滑上停止
    oBanner.onmouseover = function() {
        clearInterval(timer);
    };
    // 滑离开启
    oBanner.onmouseout = function() {
        timer = setInterval(auto, 2000);
    };
    // 点击小圆球
    for (var i = 0; i < aSpan.length; i++) {
        aSpan[i].index = i; // 给小球赋一个自定义属性
        aSpan[i].onclick = function() {
            num = this.index; // 让num等于这个自定义属性
            animate(); // 调用动画的函数
        }
    }
    // 上一张
    oLeft.onclick = function() {
        num--;
        if (num < 0) {
            num = aLi.length - 1;
        }
        animate();
    };
    // 下一张
    oRight.onclick = function() {
        auto();
    };
    // 自动播放
    function auto() {
        num++;
        // 当加到最后一张，回到0
        if (num >= aLi.length) {
            num = 0
        }
        animate();
    };
    // 动画的函数
    function animate() {
        // 让所有的span样式清空
        for (var i = 0; i < aSpan.length; i++) {
            aSpan[i].className = '';
        }
        // 让当前的span添加样式
        aSpan[num].className = 'active';
        // 改变ul的left值
        oUl.style.left = -num * 600 + 'px';
    }
})