document.addEventListener('DOMContentLoaded', () => {
    // 使用 const 声明不会改变的变量
    const backgroundMusic = new Audio('sound/bgm.mp3');

    // 设置音乐的音量和循环播放属性
    backgroundMusic.volume = 0.5;
    backgroundMusic.loop = true;

    // 使用箭头函数优化函数定义
    const playMusic = () => {
        backgroundMusic.play()
            .then(() => {
                console.log("Background music playing.");
            })
            .catch((error) => {
                console.log("Playback prevented: " + error);
                // 使用 modern JavaScript features: 添加事件监听器来处理点击，允许音乐播放
                document.body.addEventListener('click', playMusic, { once: true });
            });
    };

    // 尝试在文档加载完成后播放音乐
    playMusic();

    // 监听文档可见性的改变，根据状态播放或暂停音乐
    document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'hidden') {
            backgroundMusic.pause();
        } else {
            backgroundMusic.play();
        }
    });
});