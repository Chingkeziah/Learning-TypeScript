// array in ts describes where each element is of consistent type

const carBrands: string[] = ['Ford', 'Toyota', 'Honda', 'Chevrolet']

// [][] is called a two dimensional array
const carModel: string[][] = [['Corolla', 'Avensis', 'Camry', 'Prado']]

/* 
why do we bring types into array? 
- Ts can do type inference when extracting values from the array
- Ts can prevent you from adding incompatible values into the array
- We can also use '.map', forEach, reduce method with the array
- Flexibility
*/
const car = carBrands[0]
carBrands.map((car: string): string => {
    return car
})


// turple
/* is is an array like structure where each element represents some property of a record
 turple in ts allows you to select a value from an array but then select a particular one
 and list out their properties
*/

// this is an array
const drinks = ['coke', 'malt', 'fanta']

const drink = {
    color: 'black',
    carbonated: true,
    sugar: 12
}
const malt: [string, boolean, number] = ['black', true, 12]   //turple

// type alias

type Drink = [string, boolean, number]

const fanta: Drink = ['yellow', true, 20]
const tea: Drink = ['black', false, 3]