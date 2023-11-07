{
    // ternary operator || optional chaining || nullish coalescing operator

    const age: number = 15

    if (age >= 18) {
        // console.log("adult");
    } else {
        // console.log("not adult");
    }

    const isAdult = age >= 18 ? "adult" : "not adult"
    // console.log({ isAdult });

    // nullish coalescing operator
    // null || undefined --> decision making

    const isAuthenticated = null

    const result1 = isAuthenticated ?? "guest"

    console.log({ result1 });

    // optional chaining
    type User = {
        name: string,
        address: {
            city: string
            road: string
            presentAddress: string
            permanentAddress?: string
        }
    }
    const user: User = {
        name: "rahat",
        address: {
            city: " dhaka",
            road: "love road",
            presentAddress: "free school street"
        }
    }

    const permanentAddress = user?.address?.permanentAddress ?? "NO PERMANENT address"
    console.log({ permanentAddress });
}