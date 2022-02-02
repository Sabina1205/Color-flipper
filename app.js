// array with colors
const colors = ["#606c39", "#283618", "#dda15e", "#bc6c25", "#e88d67", "#9999c3", "#ff4000", "#50b2c0"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function () {
    // get random namber between 0 and 7 
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

// round number
function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}


