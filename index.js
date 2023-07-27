function openCategory(evt, categoryName) {
    var container
    var tablinks

    // Creates an array of elements with the class "container"
    container = document.getElementsByClassName("container");

    // For loop
    for (var i = 0; i < container.length; i++) {
        container[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");

    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    
    document.getElementById(categoryName).style.display = "flex";
    evt.currentTarget.className += " active";
}

var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

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