{
    // union type
    // type FrontendDeveloper = 'fakibazDeveloper' | 'juniorDeveloper'
    // type FullStackDeveloper = 'frontendDeveloper' | 'experiencedDeveloper'

    // const developer: FrontendDeveloper | FullStackDeveloper = "experiencedDeveloper"

    // const newDeveloper: FrontendDeveloper = "juniorDeveloper"

    // type User = {
    //     name: string
    //     email?: string
    //     gender: "male" | "female"
    //     bloodGroup: "O+" | "B+" | "AB+"
    // }
    // const user1: User = {
    //     name: "rahat",
    //     gender: "male",
    //     bloodGroup: "O+"
    // }

    // intersection type


    type FrontendDeveloper = {
        skills: string[]
        designation1: "Frontend developer"
    }
    type BackendDeveloper = {
        skills: string[]
        designation2: "Backend developer"
    }

    type FullStackDeveloper = FrontendDeveloper & BackendDeveloper

    const fullStackDeveloper: FullStackDeveloper = {
        skills: ["html", "css", "express"],
        designation1: "Frontend developer",
        designation2: "Backend developer"

    }

}