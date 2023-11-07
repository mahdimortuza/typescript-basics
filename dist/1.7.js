"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
{
    // spread operator
    // rest operator
    // destructuring
    // learn spread operator
    var bros1 = [
        "abul", "dabul", "kabul"
    ];
    var bros2 = ["mabul", "gabul", "chabul"];
    bros1.push.apply(bros1, bros2);
    var mentors1 = {
        typeScript: 'mezba',
        redux: 'mir',
        dbms: 'mizan'
    };
    var mentors2 = {
        prisma: "firoz",
        next: 'tanmoy',
        cloud: "nahid"
    };
    var mentorList = __assign(__assign({}, mentors1), mentors2);
    // rest operator 
    var greetFriends = function () {
        var friends = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            friends[_i] = arguments[_i];
        }
        friends.forEach(function (friend) { return console.log("hi ".concat(friend)); });
    };
    greetFriends("abul", "dabul", "kabul", "mabul", "gabul", "chabul");
}
