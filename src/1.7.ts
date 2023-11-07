{
    // spread operator
    // rest operator
    // destructuring



    // learn spread operator
    const bros1: string[] = [
        "abul", "dabul", "kabul"
    ]

    const bros2: string[] = ["mabul", "gabul", "chabul"]

    bros1.push(...bros2)

    const mentors1 = {
        typeScript: 'mezba',
        redux: 'mir',
        dbms: 'mizan'
    }

    const mentors2 = {
        prisma: "firoz",
        next: 'tanmoy',
        cloud: "nahid"
    }

    const mentorList = {
        ...mentors1,
        ...mentors2
    }

    // rest operator 

    const greetFriends = (...friends: string[]) => {
        friends.forEach((friend: string) => console.log(`hi ${friend}`))
    }

    greetFriends(
        "abul", "dabul", "kabul", "mabul", "gabul", "chabul"

    )

}