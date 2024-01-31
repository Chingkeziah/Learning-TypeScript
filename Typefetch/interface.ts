const wtFellow = {
    name: 'Mercy Bamisaye',
    email: 'mercybamisaye.wtf.or',
    country: 'Nigeria',
    year: 2024,
    isConsistent: false
}
const logFellow = (fellow: {name: string, email: string, country: string,
year: number, isConsistent: boolean}) => {
    console.log(`
    ${fellow.name} is a women techsters fellow of ${fellow.year},
    her email address is ${fellow.email} but is she consistent?
     (${fellow.isConsistent}
    })
    

    `)
}
logFellow(wtFellow);
// using destructuring might make you end up writting long annotation and thats where
//  interface comes in

// it makes dealing with annotation easier