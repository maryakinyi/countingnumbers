// Declaring variables for each IDS
var counterPlaceHolder = document.getElementById("counter-placeHolder");
var btnIncrement = document.getElementById("btn-increment");
var btnDecrement = document.getElementById("btn-decrement");

var number = 0;

function changeColor(number) {
    var color = "";
    if (number < 0) {
        color = "pink";
    } else if (number > 0) {
        color = "blue";
    } else {
        color = "green"; {

        }
        return color;
    }
};
btnIncrement.addEventListener("click", function() {
    number++;
    counterPlaceHolder.innerHTML = number;
    counterPlaceHolder.style.color = changeColor(number);
});

btnDecrement.addEventListener("click", function() {
    number--;
    counterPlaceHolder.innerHTML = number;
    counterPlaceHolder.style.color = changeColor(number);
});