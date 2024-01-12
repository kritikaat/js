// // for of

// // ["", "", ""]
// [{}, {}, {}]

// const arr = [1, 2, 3, 4, 5]

// for (const num of arr) {
//     //console.log(num);
// }

// const greetings = "Hello world!"
// for (const greet of greetings) {
//     //console.log(`Each char is ${greet}`)
// }

// Maps
//maps stores unique key value in it

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


console.log(map);

for (const value of map.values()) {
     console.log(value);
}

for (const key of map.entries()){
    console.log(key);
}

for (const key of map.keys()){
    console.log(key);
}

for(const [key,values] of map){
    console.log(`${key} is for ${values}`);
}

// //objects in JavaScript are not inherently iterable
// //for of loop will not work in this
// const myObject = {
//     game1: 'NFS',
//     game2: 'Spiderman'
// }

// for (const [key, value] of myObject) {
//      console.log(key, ':-', value);
//  }