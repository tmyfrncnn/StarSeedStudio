let number = 1
var favicon = document.getElementById("favicon");

function swapFavicon() {
    favicon.href = 'assets/favicon gif/0' + number + '.png'

    number++
    if (number > 9) {
        number = 1
    }
}

// setInterval is a Javascript function that executes a 
// function indefinite times (function is executed based on its seconds parameter())

// Argument/Parameter #1 Function that you want to execute
// Argument/Parameter #2 Time in milliseconds
setInterval(swapFavicon, 1000)

// document.addEventListener("DOMContentLoaded", function () {
// });
const home = document.querySelector(".home");

window.addEventListener("scroll", function () {
    const scrollPosition = window.scrollY;
    if (window.innerWidth <= 500) {
        if (scrollPosition > 0) {
            let newOpacityValue = 1 - (scrollPosition / 1000)
            
            home.style.opacity = newOpacityValue > 0.135
            ? newOpacityValue
            : 0.135
        } else {
            home.style.opacity = 1
        }
    }
});