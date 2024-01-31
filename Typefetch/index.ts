import axios from "axios";
const url = "https://jsonplaceholder.typicode.com/users/1"

// what interface does is that it defines the structure of an objet i.e how it shoul be displayed
interface User {
    id: number;
    name: string;
    username: string;
    email: string
}

// a promise and a call back
axios.get(url).then(res => {
    const user = res.data as User

    const ID = user.id
    const Name = user.name
    const Username = user.username
    const Email = user.email

    LogUser(ID, Name, Username, Email)

// used backtick to allow me write multiple lines
})

const LogUser = (ID: number, Name: string, Username: string, Email: string) => {
console.log(`
    The user with ID: ${ID}
    is called: ${Name},
    His username is: ${Username}
    and his Email address is: ${Email}
    `
    )
}