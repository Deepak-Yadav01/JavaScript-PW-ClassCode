// control statements
// 1.  if statements
// syntax------
// if (conditions){  write executable code here}
// example
let temperature=15;
if (temperature<=15) {
    console.log("its really cold");
    
}
else{
    console.log("its really hot");
}
console.log("pw skills");


// lets make a game;

let score=110
let life=3
let bullets=1000 

console.log("welcome to the game");

if (score>99) {
   console.log("gained a life");
score=score-100
life++
let bullets=2000
 console.log( `your bullets are ${bullets}`);
} else {
   console.log('dont gained life'); 
}

// Alt+z is used for word wrap
console.log(`your sore is ${score} and your life is ${life} and your bullets are ${bullets}`);



// build a rating  system for pizzahut

// 1  star- poor
// 2 star- emm,ok
// 3  star- average
// 4  star- cool 
// 5  star- great
// 6  star- awesome
// 7  star- nailed it


let getstarformuser = "5"
let starInnumber =parseInt(getstarformuser)

if (starInnumber==1) {
  console.log("poor");  
}else if (starInnumber==2) {
    console.log("emm,ok");
}else if (starInnumber==3) {
    console.log("average");
}else if(starInnumber==4) {
    console.log("cool");
}else if (starInnumber==5) {
    console.log("great");
}else if (starInnumber==6) {
    console.log("awesome");
}else if (starInnumber==7) {
   console.log("nailed it"); 
}else{
    console.log("Don`t know about rating");
}



// login system
// if email is present,ask for password.otherwise ask for email


const email="dy@login.com"

if (email == "dy@login.com") {
    console.log("plesae enter password");
} else {
    console.log("please enter email");
}

// valid for all email
if (email != " ") {
    console.log("plesae enter password");
} else {
    console.log("please enter email");
}

// by using truthy and falsy value
// falsy values are--
/*
false
""
NaN
undefined
Null
0

*/
if (email) {
    console.log("plesae enter password");
} else {
    console.log("please enter email");
}
console.log(Boolean(email));



// if user provide email and password,then allow to login ,else  ask for it


const email1 =""
const password1 =""

if (email1) {
    if(password1){
        console.log("logedIn");
    }else{
        console.log("plz enter your password1");
    } 
} else {
   console.log("plz enter email1"); 
}

// using logical operators
// &&--and   ,   ||--or

if (email1 && password1) {
    console.log("you are loggedIn");
}else{
    console.log("plz enter your email1 and password1");
}

// allow user to signin with google or github

const googlelogintoken =""
const githublogintoken =""

if (googlelogintoken || githublogintoken) {
    console.log("you are loggedin");
}else{
    console.log("plz enter github or google login token");
}



