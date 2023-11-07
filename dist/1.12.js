"use strict";
{
    // nullable type /unknown type
    var searchName = function (value) {
        if (value) {
            console.log("searching");
        }
        else {
            console.log("there is nothing to search");
        }
    };
    searchName(null);
    // unknown type
    var getSpeedInMeterPerSecond = function (value) {
        if (typeof value === "number") {
            var convertedSpeed = (value * 1000) / 3600;
            // console.log(`the speed is ${convertedSpeed} ms`);
        }
        else if (typeof value === 'string') {
            var _a = value.split(' '), result = _a[0], unit = _a[1];
            var convertedSpeed = (parseFloat(result) * 1000) / 3600;
            // console.log(`the speed is ${convertedSpeed} ms`);
        }
        else {
            // console.log("wrong input");
        }
    };
    getSpeedInMeterPerSecond("100 kmph");
    // never type
    var throwError = function (msg) {
        throw new Error(msg);
    };
    throwError("mushkil se error ho gia");
}
