function generateNumber() {
  console.log('Generating number...');
  const valueBtn = document.getElementById('number');
  const randomNum = Math.floor(Math.random() * 100);
  valueBtn.textContent = randomNum;
  checkOddEven(randomNum);
}

function checkOddEven(num) {
  console.log('Checking odd/even...');
  const container = document.getElementById('odd-even');
  const numCon = num % 2 === 0 ? 'The number is even' : 'The number is odd';
  container.textContent = numCon;
}

window.onload = function () {
  console.log('Page loaded');
  const generateBtn = document.getElementById('generate-number');
  generateBtn.addEventListener('click', generateNumber);
};
// donot change the following export statement

if (typeof exports !== "undefined") {
  module.exports = {
    generateNumber,
    checkOddEven,
  };
}
