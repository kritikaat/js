// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

myArr.unshift(9) //put 9 at the starting of the array and shift all the elements to the right of array,it will allocate the size dynamically
console.log(myArr)

myArr.shift() //shift all the keys to the left side and removes the first element in array
console.log(myArr)

console.log(myArr.includes(9)); //it will check whether 9 is present or not
console.log(myArr.indexOf(900)); //it will return the index of 3 element if it is not present than it will return -1

const newArr = myArr.join() //this is of string type, new array is only converted into string type and all elements are binded int it

newArr[1] = 100//not working
console.log(typeof newArr)
console.log(myArr);
console.log( newArr);


//slice, splice

console.log("original array: ", myArr);

const myn1 = myArr.slice(1, 3)//this will create the copy of elements that stored at index 1,2 and then store it in new array and previous array will remain same

console.log("sliced array: ",myn1);
console.log("original array after sliced array:  ", myArr);


const myn2 = myArr.splice(1, 3)//this will take it as refrence the previous array will left with elemnts instead of elemnts at index 1,2 and 3, and 1,2 will transfer to another array

console.log("spliced array: ", myn2);
console.log("original array after spliced array:  ", myArr);








const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

//marvel_heros.push(dc_heros)//this will create array inside array which is problematic or larger perspective

//console.log(marvel_heros);
//console.log(marvel_heros[3][1]);

const allHeros = marvel_heros.concat(dc_heros)//this will create it as single string
console.log(allHeros);


const all_new_heros = [...marvel_heros, ...dc_heros] //this is known as spread method 
console.log(typeof all_new_heros)

console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("kritika")) //this will return false as it is a string
console.log(Array.from("kritika")) //convert it to array
console.log(Array.from({name: "kritika"})) // interesting //kind of associative array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); //create array of all diff variables