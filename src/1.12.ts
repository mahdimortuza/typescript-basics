{
    // nullable type /unknown type

    const searchName = (value: string | null) => {
        if (value) {
            console.log("searching");
        } else {
            console.log("there is nothing to search");
        }
    }
    searchName(null)

    // unknown type
    const getSpeedInMeterPerSecond = (value: unknown) => {

        if (typeof value === "number") {

            const convertedSpeed = (value * 1000) / 3600
            // console.log(`the speed is ${convertedSpeed} ms`);
        }

        else if (typeof value === 'string') {
            const [result, unit] = value.split(' ')
            const convertedSpeed = (parseFloat(result) * 1000) / 3600
            // console.log(`the speed is ${convertedSpeed} ms`);
        } else {
            // console.log("wrong input");
        }
    }
    getSpeedInMeterPerSecond(`100 kmph`)



    // never type
    const throwError = (msg: string): never => {
        throw new Error(msg)
    }
    throwError("mushkil se error ho gia")
}