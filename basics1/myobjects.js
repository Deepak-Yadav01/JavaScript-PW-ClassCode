const user ={
    name: "Deepak Yadav",
    username: "dy",
    email: "dspyadavdeepak01@gmail.com",
    age: 20,
    isAdmin: false,
    isLoggedin: true,
    tea:["lemon","ginger","peach"],
    address:{
        city:"Gomtinagar",
        state:"UP"
    }
}
// there are two ways to access the objects
// 1.way is
console.log(user.name);
console.log(user.age);
// 2.way is insidee the (user['write the key']) 
console.log(user['age']);

// accessing ginger
console.log(user.tea[1]);
// accessing UP
console.log(user.address.state);
console.log(user['address'] ['state']);

// update email
user.email="dy@yadav.com"
console.log(user);
// delete
delete user.isAdmin
// accessing all the keys
console.log(Object.keys(user));
// access all the values
console.log(Object.values(user));

// hasOwnProperty("keys")is  used to know is it present or not
console.log(user.hasOwnProperty('tea'));









































































