const user = {
    username: "kritika",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}

user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()


//in browser if we try to log (this) then it will return the browsers global object which is window while in node it is returning empty object
console.log(this);

const chai = function () {
        let username = "kritika"
        console.log(`i am regualr function`);
        console.log(this);
        console.log(this.username);
     }


 //  it's a regular function call, and this inside the function refers to the global
 //  object (or is undefined in strict mode). Since username is a local variable inside the function,
 //  this.username will be undefined because the global object does not have a property named username.
 // (this) will give us he current context.



const coffee =  () => {
    let username = "kritika"
    console.log(`i am arrow function`)
    console.log(this);
    console.log(`${this.username} , welcome to website`);//this is termend as undefined in the arrow functions
}

//i am unable to acess this inside the arrow function or regualr function until unless it is refered in the pbject or constructor
chai()
coffee()



//understanding more about the syntaxx of arrow function

const addTwoo = (num1, num2) => {
         return num1 + num2
     }//normal way
    
const addTwo = (num1, num2) =>  num1 + num2 //implicit return
    
const addTwooo = (num1, num2) => ( num1 + num2 )//implicit return can be done by using parenthesis but if we are using
//curly braces then it is necesarry to write return keyword
    
const addTwwo = (num1, num2) => ({username: "kritika"})//returning an object 
    
    
console.log(addTwwo(3, 4))
    
// const myArray = [2, 5, 3, 7, 8]
// myArray.forEach()


//+++++++++key difference between arrow functions and regular functions 
//1.arrow functiions do implicit return which is easy for call backs
//2.there is differnce in binding of this, in arrow function this is pointing to the surronding cscope not the context in which it is present
//if we write a arrow function inside the object it will return the value present o this in global scope either undefined while 
//regular function will return the context of that object
const myObject = {
    value: 42,
    regularMethod: function() {
      console.log(this.value);
    },
    arrowMethod: () => {
      console.log(this.value); // 'this' refers to the outer 'this', not 'myObject'
    }
  };
  
  myObject.regularMethod(); // Logs 42
  myObject.arrowMethod();   // Logs undefined (or value from outer scope)
//3.arrow function can't be used as constructor functions
//4.we can't simply pass the arguments inside the arrow function we can do that using the rest operator only
//5.arrow functions are benificial in the callbacks.



//while learning the closure callbacks and dom events we get to kow much better about arrow function