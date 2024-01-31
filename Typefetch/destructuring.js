// you want to bring out only what you need in an array or object = de structuring
// object
const vehicle = {
    brand: 'Mercedes benz',
    model: 'GLE Coup',
    type: 'SUV',
    year: '2021',
    color: 'mate black',
    isfast: true,
}
function myVehicle({brand,  year, color, isFast}) {
    const msg = 'My car is a  ' + color + ' ' + year + ' ' + brand + ' . Is it fast? ' + isFast
    console.log(msg)
}
myVehicle(vehicle);
/* de structuring occurred when we decided to use just color, year, brand and isfast from the object although
 other properties like model and type exist in that object*/