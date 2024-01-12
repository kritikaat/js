//const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){     //for each takes a callback function int it.
//     console.log(val);
// } )

// coding.forEach( (item) => {         //arrow function is usedd here
//     console.log(item);
// } )

// function printMe(item){       
//      console.log(item);
// }
// coding.forEach(printMe)               //normal function is used but the refrence of that function i passes in as argument

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

// accesing objects using for each
// myCoding.forEach( (item) => {  //item is reffered as object inside my coding array
    
//     console.log(item.languageName);
// } )


myCoding.forEach((keys,value)=>{
       console.log(keys, value);
})

//for each will always gives the values first and then index  so reverse the above code of keys and value



const coding = ["js", "ruby", "java", "python", "cpp"]
const values = coding.forEach( (item) => {
    //console.log(item);
    return item
} )

console.log(values);
//for each will never return any values so in some case when we need the value the it is not the good choice
//for that we will use filter