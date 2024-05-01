// This is where you should write all JavaScript
// for your project. Remember a few things as you start!
// - Use let or const for all variables
// - Do not use jQuery - use JavaScript instead
// - Do not use onclick - use addEventListener instead
// - Run npm run test regularly to check autograding
// - You'll need to link this file to your HTML :)
// This is where you should write all JavaScript
// for your project. Remember a few things as you start!
// - Use let or const for all variables
// - Do not use jQuery - use JavaScript instead
// - Do not use onclick - use addEventListener instead
// - Run npm run test regularly to check autograding
// - You'll need to link this file to your HTML :)


// quiz.js 文件内容
document.addEventListener('DOMContentLoaded', () => {
    const answerA = document.getElementById('answer-a');
    const answerB = document.getElementById('answer-b');
    const answerC = document.getElementById('answer-c');
  
    answerA.addEventListener('click', () => {
      window.location.href = 'dolphin-A.html'; // A 选项的结果页面
    });
  
    answerB.addEventListener('click', () => {
      window.location.href = 'dolphin-B.html'; // B 选项的结果页面
    });
  
    answerC.addEventListener('click', () => {
      window.location.href = 'dolphin-C.html'; // C 选项的结果页面
    });
  });