// import functions and grab DOM elements
const button = document.getElementById('generate');
const numText = document.getElementById('random-num');

function generateRandomNum() {
    return Math.floor(Math.random() * 10);
}

button.addEventListener('click', () => {
    const randomNum = generateRandomNum();
    numText.textContent = randomNum;
});
