// Immediately Invoked Function Expressions (IIFE)


//sometimes we want that our function should execute immediately and don't get polluted by its global scope so we create our own scope
//sommeimes we just write the database file only which we want to run immediately as the website start there we use iife

function hello(){
    console.log(`hello, user!`);
}
hello();//sometimes this get polluted by global scope


//this is how we write iife when we define the function it is immeiately invoked
(function bye(){
     console.log(`bye`);
})();
//(this is for defining the function)(this is for calling the function)()()


((name)=>{//get the parameter
    console.log(`hello, ${name}`);
})("kritika")//passed the arguments


//but wait it will throw error because there is another IIFE above which doesn't know when to end so for writing two or
//more IIFE'S in the same file we will just use ; at the end of IIFE
//we have to put ; at the end of any function before IIFE any function