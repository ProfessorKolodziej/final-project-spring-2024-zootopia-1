

// quiz.js 文件内容
document.addEventListener('DOMContentLoaded', () => {
    const answerA = document.getElementById('answer-a');
    const answerB = document.getElementById('answer-b');
    const answerC = document.getElementById('answer-c');
  
    answerA.addEventListener('click', () => {
      window.location.href = 'tiger-A.html'; // A 选项的结果页面
    });
  
    answerB.addEventListener('click', () => {
      window.location.href = 'tiger-B.html'; // B 选项的结果页面
    });
  
    answerC.addEventListener('click', () => {
      window.location.href = 'tiger-C.html'; // C 选项的结果页面
    });
  });