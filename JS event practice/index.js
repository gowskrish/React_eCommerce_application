let openNewForm = document.getElementById("openNewForm");
// let subresult = document.getElementById("subresult");
// let cancel = document.getElementById("cancel");

// Submit.addEventListener("click", function(){
//     subresult.innerHTML = "Welcome Gowthami For Event Lisner Practice";
// });
let container = document.getElementById("container")

function Newform (){

    // alert("hi new form")
//Create Form
let form = document.createElement("form");
form.classList.add("form_main") 

//Create Name Label

let nameLabel = document.createElement("label")
nameLabel.innerText = "Your Name : ";

// Create name Input

let nameInput = document.createElement("input");
nameInput.type="text";
nameInput.placeholder = "Enter Your Name";

//Create email balel

let emailLabel = document.createElement("label");
emailLabel.innerText = "Your Eamil : ";

//Create EmaiInput

let emailInput = document.createElement("input");
emailInput.type="text";
emailInput.placeholder = "Enter Your Email";
//create message label
let messageLabel = document.createElement("messageLabel")
messageLabel.innerText = "messageLabel";

let messageInput = document.createElement("textarea");
messageInput.type="text";
messageInput.classList.add("messageText")

form.appendChild(nameLabel);
form.appendChild(nameInput);

form.appendChild(document.createElement("br"))
form.appendChild(document.createElement("br"));

form.appendChild(emailLabel);
form.appendChild(emailInput);

form.appendChild(messageLabel);
form.appendChild(messageInput);

form.appendChild(document.createElement("br"));

container.appendChild(form);


}

openNewForm.addEventListener("click", Newform)

// cancel.addEventListener("click", function(){
//     subresult.innerHTML = "";
// })

console.log("welcom")

console.log([]==![])//True

function fn(){
    return{
        name:"Gowthami"
    }
}
console.log(fn())

// const arr = [10, 12, 18, 6, 4]

// for(let i=0; i<arr.length; i++){
//     for(let j= i+1; j<arr.length; j++){
//         if(arr[i] + arr[j] === 10){
//             console.log(arr[i], arr[j])
//         }
//     }
// }

// let myName = ["diya"];

// for(let i=0; i<myName.length; i++){
//     for(let j=0; j<myName[i].length; j++){
//         console.log(myName[i][j])
//     }
// }

// var x = 0;
// var y = "0";
// var z=false;

// console.log(x==y)//true or 0
// console.log(x==z);//false or 0

// if([] == false){
//     console.log("Gowthami")
// }else{
//     console.log("Not Gowthami")
// }
// var a = 10;

// if(function abc() {}){
//     a = a + typeof abc
// }
// console.log(a)

// let person = {
//     name:"Gowthami",
//     age:26
// }
// let {name,age} = person;

//  console.log(age)   

let a = [10,20,30,40]
let b = [...a, 50,60,100]
console.log(b);

console.log(0.1 + 0.2 === 0.3)
console.log(1+2)

let obj ={
    a:1,
    b:2
}
console.log(obj)
let res = JSON.stringify(obj)

console.log(res)
console.log(typeof res)

let fruit = ["Apple", "Banana", "Mango"]
let convObj = fruit.reduce((acc, curr, index) =>{
    acc[index] = curr
    return acc;
}, {})

console.log(convObj)