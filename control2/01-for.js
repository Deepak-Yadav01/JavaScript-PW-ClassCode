// for loop
// syntax

//  for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
//  }

// or

// for([initialexpresion/deleration];[conditions];[changer]){
//     code execution
// }

for (let userscore = 1; userscore <= 10;  userscore++){
    console.log(`userscore is ${userscore}`);
}

// // it can also be written as
let userscore=1
let highestvalue=10
for (userscore ; userscore <= highestvalue;  userscore++){
    console.log(`userscore is ${userscore}`);
}

// // another example
let userscore1=10
let minvalue=1
for (userscore1 ; userscore1 >=minvalue;  userscore1--){
    console.log(`userscore is ${userscore1}`);
}

// if  score hits 5, don't print anything after that

let userscore2=10
let minvalue2=1
for (userscore2 ; userscore2 >=minvalue2;  userscore2--){
    
    if (userscore2==5) {
        break;
    }
    console.log(`userscore is ${userscore2}`);
    
}

// if score hits 5,skip printing 5 ,but rest values should be printed
// continue keywords is uesd for skip
let userscore3=10
let minvalue3=1
for (userscore3 ; userscore3 >=minvalue3;  userscore3--){
    
    if (userscore3==5) {
        continue;
    }
    console.log(`userscore is ${userscore3}`);
    
}
