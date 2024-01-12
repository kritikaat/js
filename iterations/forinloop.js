const myObject = {
    js: 'javascript',//js is key
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    console.log(key);
    console.log(`${key} has value ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    //console.log(programming[key]); // 0 1 2 3 4 5 "js is value of key 0"
}

//arrays also have keys but keys of array starts with 0 and can be only numbers
// that's why object designed in which we can give any key to it

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map) {
    console.log(key);
}

// the for-of loop is designed specifically for iterating over iterable objects,
// and Map objects are iterable by design.
// On the other hand, the for-in loop is more generic and may include properties from the entire prototype chain,
// leading to unexpected results when used with Map.


//for in loop will return the keys 