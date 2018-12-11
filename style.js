const spotWrap = document.querySelector(".manyletters");
const spot = document.querySelectorAll(".oneletter");
var positionList = [];

// function randomPosition() {
//     var X = spotWrap.offsetHeight - 50; //for message show
//     var Y = spotWrap.offsetWidth - 100;
//     console.log(X);
//     console.log(Y);
//     var randomTop = Math.floor(Math.random() * X);
//     var randomLeft = Math.floor(Math.random() * Y);

//     for (var k = 0; k < spot.length; k++) {
//         var starTop = randomTop * (k + 1) / 2; //If i delete (k+1), all star's position are same.. 
//         var starLeft = randomLeft * (k + 1) / 2;
//         if (starTop < X && starLeft < Y) { //have to smaller than spotWrap
//             spot[k].style.top = starTop + "px";
//             spot[k].style.left = starLeft + "px";
//         }
//     }
// }


function randomPosition() {
    var X = spotWrap.offsetWidth; //for message show
    var Y = spotWrap.offsetHeight;
    console.log(X);
    console.log(Y);

    var spotX = spot[0].offsetWidth;
    var spotY = spot[0].offsetHeight + 180; //180: when the showbox is showing.
    console.log('letter width:', spotX);
    console.log('letter height:', spotY);

    for (var k = 0; k < spot.length; k++) {
        // var randomTop = Math.floor(Math.random() * X);
        // var randomLeft = Math.floor(Math.random() * Y);
        var randomTop = Math.random() * (Y - spotY);
        var randomLeft = Math.random() * (X - spotX);
        console.log(randomTop);
        console.log(randomLeft);
        var starTop = randomTop; //If i delete (k+1), all star's position are same.. 
        var starLeft = randomLeft;
        spot[k].style.top = starTop + "px";
        spot[k].style.left = starLeft + "px";
        // if (positionCheck(starTop, starLeft)) { //have to smaller than spotWrap
        //     spot[k].style.top = starTop + "px";
        //     spot[k].style.left = starLeft + "px";
        // } else {
        //     k--;
        // }

    }
}

// // [LJH]위아래 옆 같은 라인에도 올수 있음 코딩 수정 필요
// function positionCheck(checkTop, checkLeft) {
//     // 하나 생성시 마다 확인하고 겹치지 않으면 추가
//     // 만약 겹치면 다시 랜덤 돌린다.
//     for (var i = 0; i < positionList.length; i++) {
//         if (checkTop - 50 < positionList[i].Top && positionList[i].Top < checkTop + 50) {
//             return false;
//         }
//     }
//     positionList.push({ "Top": checkTop, "Left": checkLeft });
//     return true;
// }

function init() {
    randomPosition();
}

init();