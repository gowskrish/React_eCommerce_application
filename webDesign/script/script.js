// let grossSalary = 50000;
// function takeHomeSalary(x) {

//     let pfDeduction = grossSalary * 10 / 100;
//     // console.log("pfDeduction", pfDeduction);
//     return pfDeduction;

//     function taxDeduction(){
//         let taxAmount = grossSalary * 5 / 100;
//         console.log("taxAmount", taxAmount);
//         return taxAmount;
//     }



// }

// let netSalary = (grossSalary - takeHomeSalary(grossSalary));
// console.log("netSalary", netSalary);


// // let netSalary = takeHomeSalary();
//**********************************function****************************************** */
function calculateNetSalary(x) {

    let taxDeduction = x * 5 / 100;
    let pfDeduction = x * 10 / 100;
    let salIncrement = x * 18 / 100;
    return x - taxDeduction - pfDeduction + salIncrement;
}
function showNetSalary() {
    let grossSalary = Number(document.getElementById("grosssal").value);
    let netSalary = calculateNetSalary(grossSalary);

    document.getElementById("netsal").innerText = "Net Salary: " + netSalary;
}
function declaration(yourname, age) {
    let result;

    if (age === 5) {
        result = `${yourname} is Eligible for Nursery`;
    } else if (age === 6) {
        result = `${yourname} is Eligible for UKG`;
    } else if (age === 7) {
        result = `${yourname} is Not Eligible for this school`;
    } else {
        result = `${yourname} should go to play school`;
    }
    document.querySelector(".declaration_result").innerText =
        `Declaration is: ${result}`;
}
function submitDeclaration() {
    let yourName = document.getElementById("nametext").value;
    let yourAge = Number(document.getElementById("age").value);
    declaration(yourName, yourAge);
}



// function createTable(){
//     let x = document.createElement("table");
//     x.setAttribute("id", "resultTable");
//     x.style.border="2px solid black";
//     x.style.width="200px";
//     x.style.height="100px";
//     x.style.margin="30px";
//     document.body.appendChild(x);
// // CREARE ROWS*****************************************************************//
//     let y = document.createElement("tr");
//     y.setAttribute("id", "trow")
//     x.appendChild(y);
// // CREATE CELLS*****************************************************//


// }
// const students = [
//     { examNo : 101, Name: "Diya" , Tamil : 85, English : 72, Maths: 89, Science : 56, SocialSciece : 67},
//     { examNo : 102, Name: "Gowthami" , Tamil : 76, English : 37, Maths: 47, Science :65, SocialSciece : 74},
//     { examNo : 103, Name: "Rithvik" , Tamil : 48, English : 64, Maths: 39, Science : 72, SocialSciece :82},
//     { examNo : 104, Name: "Thaksan", Tamil : 36, English : 81, Maths: 77, Science : 38, SocialSciece : 15},
//     { examNo : 105, Name: "Sulochana" , Tamil :55, English :49, Maths: 58, Science :55, SocialSciece : 63},
// ];

// function createTable(){
//     const examNo = Number(document.getElementById("exam_No").value);
//     const output=document.getElementById("output");
//     const resultText=document.getElementById("resultText");

//     const passFail = Mark.every(mark => mark >= 35) ? "RESULT IS PASS" : "RESULT IS FAIL";

//         resultText.innerHTML= passFail;


//     const result = students    

//         .filter(students => students.examNo === examNo).map(students => `
//         <table border="2">
//         <tr><td>Name</td><td>${students.Name}</td></tr>
//         <tr><td>Subject</td><td>Mark</td></tr>
//         <tr><td>Tamil</td><td>${students.Tamil}</td></tr>
//         <tr><td>English</td><td>${students.English}</td></tr>
//         <tr><td>Maths</td><td>${students.Maths}</td></tr>
//         <tr><td>Science</td><td>${students.Science}</td></tr>
//         <tr><td>SocialScience</td><td>${students.SocialSciece}</td></tr>
//         </table>
//         `);

//         output.innerHTML = result.length ? result.join("") : "<p>Exam no is not found</p>"

// };

// const plus = (a, b) => a + b;

// console.log(plus(2,3));

// const a = x => x*x;

// console.log(a(2));

// const x = ()=>{
//     console.log('hello');

// }
// x();

function greet(message) {
    // console.log(`${message} wow`);
}

// setTimeout(function(){
//     console.log('Welocme');
// }, 2000);

// setTimeout(()=> {
//     console.log('Arrow call back function');

// }, 3000);

function abc(message) {
    // console.log(`${message} hellow world`);
}

function greetings(name = "gowthami", callback = greet) {
    callback(`welcome ${name}`);
}

// greetings("Diya", abc);
// greetings();

(() => {
    // console.log('IIVF function');

})();

const arr = [10, 20, 30, 40];
// console.log("arrOriginal", arr);

const double = [];
const popDouble = [];
const shiftDouble = [];
const unshiftDouble = [];
// console.log("double:", double);

for (let i = 0; i < arr.length; i++) {
    double.push(arr[i] * 2);
}

// console.log(arr);
// console.log(double);

const pp = double.pop();

// console.log("popDouble", pp);



// for(let i = 1; i<=5; i++){
//     console.log(i);

// }

// const doublemap = arr.map(num => num * 2);
// console.log("doublemap",doublemap);

// // [20, 40, 60, 80]

// const doublemap1 = arr.map((num) => {num * 2});
// console.log("doublemap",doublemap);

// const doublemap3 = arr.map(function(num){
//     return num * 2;
// });
// console.log("doublemap3", doublemap3);


const students = [
    { name: "Asha", marks: 85 },
    { name: "Ravi", marks: 42 },
    { name: "Neha", marks: 76 },
    { name: "Kiran", marks: 35 }
];

// Find students with marks 50 or above
const passedStudents = students.filter(student => student.marks >= 50);
console.log("passedStudents", passedStudents);

passedStudents.map(student => {
    let eligible = ``
    //   console.log(student.name);
});
// Display their names
// passedStudents.forEach(student => {
//   console.log(student.name);
// });

// Output:
// Asha
// Neha



let item = ["Apple", "Banana", "Orange", {
    name: "Gowthami",
    age: 38,
    city: "Bangalore"
}];

item.map(data1 => { // Arr mapping will happen then one by one array of item will assign to data1. example: first loop data1 = Apple, ....

    if (typeof data1 === "object"){ // this condition will pass while array of item taypeOf dat = object
        console.log("obj key", Object.keys(data1)); // []
        console.log("obj val", Object.values(data1)); // []
        
        Object.keys(data1).map(key => { // 
            if (key=== "age"){ // 
                console.log(data1[key]); //
            }
        });
    }
});
