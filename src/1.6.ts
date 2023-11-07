{

    // learning function
    //normal function
    // arrow function 

    // function add(num1: number, num2: number): number {
    //     return num1 + num2
    // }
    // add(5, 8)

    const arrow = (num1: number, num2: number): number => num1 + num2

    // object --> function --> method
    const poorUser = {
        name: "rahat",
        ballance: 0,
        addBallance(ballance: number): string {
            return `my new ballance is ${this.ballance + ballance}`
        }
    }


    const arr: number[] = [1, 4, 5]

    const newArray: number[] = arr.map((elem: number): number => elem * elem)
}