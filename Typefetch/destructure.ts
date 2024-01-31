const user = {
    myName: "Ivy Keziah",
    age: 29,
    cordinates: {
        lat: 4,
        long: 15
    },
    setAge(age: number): void {
        this.age = age
    }
}
const {myName, age}: {myName: string; age: number} = user