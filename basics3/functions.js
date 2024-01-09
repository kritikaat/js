
function sayMyName(){
    console.log("hello");
    console.log("kritika");
}

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5) //result will stor the value returned by the function

// console.log("Result: ", result);


function loginUserMessage(username = "heya"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("kritika"))


function calculateCartPrice(val1, val2, ...num1){ //in case is we don't know how much argument we are going to get so in that cas we use rest oprator ...num same as spread but rest and spread can be differentiated based on there use
//here val1 and val2 will be the first two arguments and rest of argument will  be taken in count by ...num   
    return num1
}


function carttotal(...num){
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        sum += num[i];
    }
    let type = typeof(num)
    return (`total is ${sum} and ${type}`)
}
console.log(carttotal(20,40,50,90,100));


// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "kritika",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)

handleObject({
    username: "kritika",
    price: 399
})

//passing array in function
const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([200, 400, 500, 1000]));