// 平滑滚动到锚点
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 在这里可以添加更多的JavaScript功能，比如:
// - 动态加载用户案例
// - 表单验证
// - 音乐播放器控制
// - 动态背景切换等