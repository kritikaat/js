const name = ("kritika")
const repocount = 33
console.log(name + " " + repocount) //this is the badest way to ouput a string

//instead we will do it like this
//we will use backticks ``
//using backtick we get string interposition , means we create placeholders where we can inject any variables
console.log(`hello my name is ${name}`)

//ther is another way to declare javascript

const housename = new String('myhouse')
//using new key word we get acess to the javascript objects here string is refferedd to the object
//this provides some extra properties it help to fid the lengt of string
// 0:m 1:y 2:h this are not indexes these are key value pairs which represents the position of each word inthe string

console.log(housename.__proto__)//this will return an empty object
console.log(housename.length)
console.log(housename.toUpperCase())//this will copy the string usinng stack but doesnt changes it s original value

console.log(housename.charAt(4))//this will return the character at 4rth position
console.log(housename.indexOf('o'))//this will return index of characcter o