/* read about throw error
never and void */


const add = (a: number, b: number): number => {
    return a + b
}

const multiple = function(a: number, b: number) {
    return a * b
}

const logger = (msg: string) => {
    console.log(!msg)
}
const throwError = (msg: string) => {
        if(msg){
        throw new Error(msg)
    }
    return msg
}