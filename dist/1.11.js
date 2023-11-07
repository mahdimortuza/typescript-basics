"use strict";
var _a, _b;
{
    // ternary operator || optional chaining || nullish coalescing operator
    var age = 15;
    if (age >= 18) {
        // console.log("adult");
    }
    else {
        // console.log("not adult");
    }
    var isAdult = age >= 18 ? "adult" : "not adult";
    // console.log({ isAdult });
    // nullish coalescing operator
    // null || undefined --> decision making
    var isAuthenticated = null;
    var result1 = isAuthenticated !== null && isAuthenticated !== void 0 ? isAuthenticated : "guest";
    console.log({ result1: result1 });
    var user = {
        name: "rahat",
        address: {
            city: " dhaka",
            road: "love road",
            presentAddress: "free school street"
        }
    };
    var permanentAddress = (_b = (_a = user === null || user === void 0 ? void 0 : user.address) === null || _a === void 0 ? void 0 : _a.permanentAddress) !== null && _b !== void 0 ? _b : "NO PERMANENT address";
    console.log({ permanentAddress: permanentAddress });
}
