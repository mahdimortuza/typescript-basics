{
    // type alias


    // type alias object

    type Student = {
        name: string
        age: number
        contactNo?: string
        gender: string
        address: string
    }

    const student1: Student =
    {
        name: 'rahat',
        age: 254,
        gender: "male",
        address: "free street school"
    }

    const student2: Student =
    {
        name: 'mahdi',
        age: 24,
        contactNo: "54651",
        gender: "male",
        address: "free street school"
    }


    // type alias string, boolean, number

    type UserName = string
    const person: UserName = "rahat"

    // type alias function
    type Add = (num1: number, num2: number) => number

    const add: Add = (num1, num2) => num1 + num1


}