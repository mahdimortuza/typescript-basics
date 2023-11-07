"use strict";
// learning function
//normal function
// arrow function 
function add(num1, num2) {
    return num1 + num2;
}
add(5, 8);
var arrow = function (num1, num2) { return num1 + num2; };
// object --> function --> method
var poorUser = {
    name: "rahat",
    ballance: 0,
    addBallance: function (ballance) {
        return "my new ballance is ".concat(this.ballance + ballance);
    }
};
var arr = [1, 4, 5];
var newArray = arr.map(function (elem) { return elem * elem; });
