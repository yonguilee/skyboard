const spotWrap = document.querySelector(".manyletters");
const spot = document.querySelectorAll(".oneletter");


function randomPosition() {
    var X = spotWrap.offsetHeight - 50; //for message show
    var Y = spotWrap.offsetWidth - 100;
    console.log(X);
    console.log(Y);
    var randomTop = Math.floor(Math.random() * X);
    var randomLeft = Math.floor(Math.random() * Y);

    for (var k = 0; k < spot.length; k++) {
        var starTop = randomTop * (k + 1) / 2; //If i delete (k+1), all star's position are same.. 
        var starLeft = randomLeft * (k + 1) / 2;
        if (starTop < X && starLeft < Y) { //have to smaller than spotWrap
            spot[k].style.top = starTop + "px";
            spot[k].style.left = starLeft + "px";
        }
    }
}

function init() {
    randomPosition();
}

init();