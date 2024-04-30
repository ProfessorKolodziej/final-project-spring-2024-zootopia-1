document.addEventListener('DOMContentLoaded', function() {
   
    var backgroundMusic = new Audio('sound/bgm.mp3'); // 确保路径正确

    
    backgroundMusic.volume = 0.5;

 
    backgroundMusic.loop = true;

    
    function playMusic() {
        backgroundMusic.play()
        .then(() => console.log("Background music playing."))
        .catch((error) => {
            console.log("Playback prevented: " + error);
        
            
            document.body.addEventListener('click', playMusic, {once: true});
        });
    }

    playMusic(); 

    
    document.addEventListener('visibilitychange', function() {
        if (document.visibilityState === 'hidden') {
            backgroundMusic.pause();
        } else {
            backgroundMusic.play();
        }
    });
});