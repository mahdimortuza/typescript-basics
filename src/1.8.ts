{
    // destructuring 

    // object destructuring
    const user = {
        name: {
            firstName: "mahdi",
            middleName: "mortuza",
            lastName: "rahat"
        },
        contactNo: "+880 123456",
        address: "uganda"
    }

    const { contactNo,
        name: { middleName } // name alias
    } = user

    // array destructuring 
    const myFriends = ['chandler', 'joey', 'ross', 'rachel', 'monica', 'phoebe']
    const [, , bestFriend, ...rest] = myFriends
    console.log(...rest);
}