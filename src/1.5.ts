{// reference type --> object

const user: {
    readonly address: string // type --> literal type
    company: "father's hotel" // type --> literal type
    firstName: string
    middleName?: string  //optional type
    lastName: string
    isMarried: boolean
} = {
    address: "free school street",
    company: "father's hotel",
    firstName: "mahdi",
    lastName: "rahat",
    isMarried: false
}}