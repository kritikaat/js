//singleton this are created using constructor funcctionn and call againnt o get same results some of members are private to it
//object.create 

//it create only one instance of object at a time , and all members are public
//object literas
const mysym = Symbol("key1")
const mysym2 = Symbol("key1")

const user = {
    name: "kritika",
     "email address" : "thakkarkritika@gmail.com",//for accesing this kind of memeber of object the . method won't work so we have to acess it in another way
//but only if it has space in between when it doesnt have space we can simply use dot
     "email": "hellouser@gmail.com",
      age: 18,
      [mysym]: "mykey1",
      [mysym2]: "mykey1",
      location: "gandhinagar",
      isLoggedIn : false,
      lastLogindays: [ "monday" , "friday "]
  }

console.log(user.name);
console.log(user["name"]);
console.log(user["email address"]);
console.log(user["email address"]);
console.log(user.email);

//to acess the symbol
console.log([mysym])
console.log([mysym2])

user.age = 17
//Object.freeze(user)
user.age = 19
console.log(user);

user.greeting = function(){
    console.log(`hello `);
}

user.greeting = function () {
    console.log(`hello, ${this.name}`);
}

//console.log(user.greeting)
console.log(user.greeting()); //i have freezed that object above that's why it was throwing an error that no function such as greeting is there!
//user.greeting()
//in  greeting functions you  log messages to the console but don't return anything, so they implicitly return undefined as an output after every console. But when we use return keyword in functions instead of console.log it will not output 'undefined'.



// //objects using constructor
const instauser = new Object()
// console.log(instauser);
//const instauser = {}
 
instauser.id = "kritikaat"
instauser.name = "kritika"
instauser.LoggedIn = false

console.log(instauser);

const regularUser = {
    email: "abc@gmail.com",
    fullname: {
        userfullname: {
            firstname: "kritika",
            lastname: "thakkar"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);

//for cpying one object to other

const obj1= { 1 : "a" , 2 : "b"}
const obj2 = {3 : "c"}

//const obj3 = {obj1,obj2} // same prblm as arrays will store the whole 2 dif object in one
//const obj3 = Object.assign(obj1,obj2)
//obj1 -> target obj2,obj4,obj5->source and will merge all source to the object
//to maek obj3 as source because we want merge everything in new object we use {}
const obj3 = Object.assign({},obj1,obj2)

//most easiest way to merge the objects is using spread 
const obj4 = {...obj1,...obj2,...obj3}

console.log(obj4);

console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"//users[1].email
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]
users[1].email

console.log(Object.keys(instauser)); //only tupples exist in instauser will be printed
console.log(Object.values(instauser));//what values are taken by each tupple
console.log(Object.entries(instauser))

//to check whether the following tupple exist or not

console.log(instauser.hasOwnProperty('name'));

const course = {
    coursename: "js",
    price: "000",
    courseInstructor: "hitesh sir"
}

// course.courseInstructor

const {courseInstructor: instructor} = course //basically it has created the aliace of course instructor

// console.log(courseInstructor);
console.log(instructor);