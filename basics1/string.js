const firstname ="DEEPAK"
const lastname ="YADAV"
// there are mainly three ways of cancatinate strings
console.log(firstname + lastname);
console.log(firstname +" "+ lastname);

console.log(`${firstname} ${lastname}`)


const username ="deepakyadav01 "
console.log(username[5]);
console.log(username.length);

let email="    yadavdeepak01@gmail.com  "
console.log(email);
console.log(email.trim());//trim() remove unwanted spacces from both side
let emailtwo='dspyadavdeepak01@gmail.com '
console.log(emailtwo.replace('yadav','ahir'));//replace() replace the strings
console.log(emailtwo.includes('ahir'));//includes() is used to ask a question, is it present or not
 
let emailthree='dsp@deepak.com'
console.log(emailthree.toUpperCase());//to convert into uppercase