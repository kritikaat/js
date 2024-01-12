//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    var c = 30
}

// console.log(a);
// console.log(b);
// console.log(c); //c=30, still c is changed inn the other scope but it will reflect its changes in global scope that's why
//it is not preffered to use var.


function one(){
    const username = "kritika"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "kritika"
    if (username === "kritika") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++

//in this we can also call before intializing it
console.log(addone(5))

function addone(num){
    return num + 1
}//this is simple intialzation of function so it will not throw any error.


// addTwo(5)
// const addTwo = function(num){              //addTwo is also called as expreessions sometiems
//     return num + 2
// }
//in this addTwo will throw an error because we want to hold the value in the addTwo and this concept is known as hosting in js
//it depends on how you create the function.