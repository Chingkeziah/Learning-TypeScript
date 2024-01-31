let anyName: string  = "Keziah Ching";   //annotation
let isMarried: boolean = false
let nothingMuch: null = null
let nothing: undefined = undefined
let VarToday: Date = new Date()
let cars: string[] = ["mecedes", "Audi", "BMW"]   //this is a string of array and cannot take another datatype
let myScore: number[] = [23, 43, 78]
// once you give a variable a datatypes you cant pass any other datatype not of that type

// Annotation to make it contain numbers and strings
let careFree: (number | string)[] = ["Joy", 34, "Keziah"]

let point: (x: number, y: number) => {
    x: 10,
    y: 12
}


// function annotation
// declaring what it should get as input and what it should get as output
const logNumber: (k: number) => void = (k: number) => {
    console.log(k)
}
// When to rely on inference
// you can rely on inference over annotation at any time so far as 
//you declare or initialize your variables on the same line
let fName = "Keziah";  //inference


// when can you rely on annotation
// when you declare a variable on a line and then initialize it later(when a declaration is done separately)
let fellows = ["Simisola", "Keziah", "Aishat", "Rachael"]
let isFellows;
// here isFellows has a type of any if using inference but added :boolean changes it to annotation
for (let k=0; k<fellows.length; k++){
    // if (fellows(k) === 'Rachael') 
    {
        isFellows = true;
    }
}
// when you have a variable that the type cannot be inferred (or you want the value not to be inferred)
let numbers = [-10, -1, 12]
let numAboveZero = false;  //if there is a number above zero, store it here, else return false (boolean and number)
  for (let u=0; u < numbers.length; u++){
    if (numbers[u] > 0){
        // numAboveZero = numbers[u]
    }
  }

// when the function returns the 'any' type
// this happens where typescript can't identify the type
const json = '{"name": "Simi", "age": 27}'
const user = JSON.parse(json)
console.log(user)  //{name: Simi, age: 27}
// to solve this, we need to declare what is expected from the user, using the syntax below
//const user: {name: string, age: number}