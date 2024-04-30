document.addEventListener('DOMContentLoaded', function() {
    // 创建一个新的音频对象并指定 MP3 文件的路径
    const backgroundMusic = new Audio('sound/background-music.mp3'); // 确保路径正确

    // 设置背景音乐的音量
    backgroundMusic.volume = 0.5;

    // 设置背景音乐循环播放
    backgroundMusic.loop = true;

    // 定义一个函数来播放音乐，并处理可能的自动播放阻止问题
    function playMusic() {
        backgroundMusic.play()
        .then(() => console.log("Background music playing."))
        .catch((error) => {
            console.log("Playback prevented: " + error);
            // 如果自动播放被阻止，则在用户首次点击页面时尝试再次播放音乐
            document.body.addEventListener('click', playMusic, {once: true});
        });
    }

    // 在文档加载完成后尝试播放音乐
    playMusic(); 

    // 监听页面可见性变化，以暂停/播放音乐
    document.addEventListener('visibilitychange', function() {
        if (document.visibilityState === 'hidden') {
            backgroundMusic.pause();
        } else {
            backgroundMusic.play();
        }
    });
});