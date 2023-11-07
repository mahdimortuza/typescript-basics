"use strict";
{
    // destructuring 
    // object destructuring
    var user = {
        name: {
            firstName: "mahdi",
            middleName: "mortuza",
            lastName: "rahat"
        },
        contactNo: "+880 123456",
        address: "uganda"
    };
    var contactNo = user.contactNo, middleName = user.name.middleName;
    // array destructuring 
    var myFriends = ['chandler', 'joey', 'ross', 'rachel', 'monica', 'phoebe'];
    var bestFriend = myFriends[2], rest = myFriends.slice(3);
    console.log.apply(console, rest);
}
