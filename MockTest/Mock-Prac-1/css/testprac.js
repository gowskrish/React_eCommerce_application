// var x =10;
// var x =20;
// console.log(x);

// let y = 10;
// y =40;

// console.log(y);

// let color = ["white", "black", "yellow", "orange"]
// console.log("array", color);

// color.map((colors)=>{
//     console.log("map-colors:",colors);    
// })

// const person = {
//     name:"gowthami",
//     age:28,
//     qualification:"BSC"
// }
// console.log("object", person);
// console.log(person.name);

// function greet (){
//     console.log("Normal Function", "HELLOW GOWTHAMI");
    
// }
// greet()

// function aditon (a, b){
//     console.log(a + b);
    
// }
// aditon(10, 20);

// function persondDetail(name, age){
//     console.log("Function with Parameter",`Hi ${name} ${age}`);
    
// }
// persondDetail("gowthami", 28);

// function result (a, b){
//     return a+b*a;
// }
// let res = result (2, 6);
// console.log("funtion with the return:",res);

// const book = function(c, d){
//     console.log("function Expression:",c + d);    
// }
// book(5, 5);

// const books = function(a, b){
//     return a * b
// }


// let booksres = books(5,5);
// console.log(booksres);

// **********************************FUNCION********************************//
function greet (){
    console.log("NormalFunction:", "Hellow Gowthami");    
}
greet();

// Function with parameter***************//

function addtion (a, b){
    console.log("Function with parameter:",a - b);    
}
addtion(50,10);

function greetings(name){
    console.log("Function with parameter:", `Hellow ${name}`);
    
}
greetings("Gowthami")

//*************FUNCTION WITH RETURN*************** */

function appliance(a, b, c){
    return a + b + c * 2
}

let applreslt = appliance(10,10,10);
console.log(applreslt);

function appliance2(x){
    return ("fuction with return:",`i want ${x} washingmachine`)
}

let appliance2res = appliance2(2);
console.log(appliance2res);

// ********************FUNCTION EXPRESSION********************//

const chair = function(a,b){
    console.log("Function Expression:",a+b);
    
}
chair(10,30);

const chairs = function(x, y){
    return ("Funcion Expressoion:",`i want ${x} ${y}`)
}

let chairsres = chairs(2, "TV");
// console.log(chairsres);******************** ARRAY ***********************//


//ARROW Funtion******************************************//

const greetionsss = ()=>{
    console.log("Arrow Function:", "HELLOW ARROW FUNCTION");
    
}
greetionsss();

const arrfunc = (name, city) => {
    console.log("Arrow Function:", `My name is ${name} i am from ${city}`);
}
arrfunc("Gowthami", "Bangalore");

const arrfunret = (x, y) => {
    return x * y
}
let arrfunres = arrfunret(10, 10);
console.log("Arrow Function with Return",arrfunres);

// ******************** ARRAY ***********************//

const fruits = ["Apple", "Banana", "Kiwi", "Grapes"]
console.log("Array:", fruits);

fruits.map((fruit) =>{
    // console.log( fruit); 
    document.write(`<div>${fruit}</div>`)   
});

console.log(fruits[2]);


//*****************MAP OF ARRAY */

const num = [ 10, 12, 23];
console.log(num);

let cal = num.map((numb) =>numb /3 )
console.log(cal);

//**********FILTERS*************************** */

const numb = [12, 18, 5, "98", 1, 6,]
console.log("Filtersnumb:", numb);

let numfilter = numb.filter((filt) => filt < 15)
console.log("Filter:", numfilter);

numfilter.forEach((filt) =>{
// console.log(filt);

let findnum = numb.find(num => num == 98);
console.log(findnum);

});

// *************Array Destructing************************//

const electronic = ["TV", "Washmachine", "Fridge"];

console.log(electronic);

console.log(electronic[2]);
let [a,b,c] = electronic;
console.log(c);

// *************Object Destructing************************//

const person = {
    name:"Gowthami",
    age:28,
    qual:"BSC"
}

console.log(person.name);

let {name,age,qual} = person;
console.log(qual);

// ***********************SPREAD OPERATOR ARRAY*************************//
// Spread operator is used to copy or combine arrays/objects.;
let x = ["a", "b", "c" ]
let y = [...x, 1,2,3]
console.log("spreadOperatorarray:" ,y);

//***********************************SPREAD OPERATOR OBJECT */

let emp = {
    emp_name: "Ramesh",
    desig :"Clerk"
}
console.log(emp);
let empdet = {
    ...emp,
    sal:5000,
}
console.log(empdet);
//***********************************REST OPERATOR *********************** */

let calc = [10, 20, 30, 40, "ramesh","suresh", "rithvik", 50];
// let [first,two, ...rest1]  = calc;
console.log(calc);

let filtres = calc.filter((filt) => {
    return typeof (filt) === "string";
})
console.log(filtres);

filtres.forEach((value) => {
console.log("forEach_rest", value);

});

let office = {
    name1:"Diya",
    desg:"Operator",
    sal:6000,
    qual:"Bcom"
}
console.log(office);


let {name1, ...rest } = office
console.log(name1);
console.log(rest);

//*******************DOM********************** */

document.getElementById("wel").innerText= "WELCOME"
document.getElementById("wel").innerHTML = `<button style= "color:red" button>HELLOW</button>`

//*******************************Add Event listner***************** */

// document.getElementById("butn").addEventListener("click", function(){
//     document.getElementById("subres").innerText = "Button Clicked"
// })
let show = false;

document.getElementById("butn").addEventListener("click", function() {

    if (show === false) {
        document.getElementById("subres").innerText = "Button clicked!";
        show = true;
    } else {
        document.getElementById("subres").innerText = "";
        show = false;
    }
});
// ***************************CALL BACK FUNCTION**********************************

// function greet(name, x){
//     let y = "hellow" +name;
//     // x(y);
// }
// function showMesg (result){
//     console.log(result);
    
// }
// greet("Gowthami", showMesg());
//*************************PROMISES********************* */

// myPromise = new Promise((resolve, reject) =>{
//     let result = false;

//     if(result){
//         resolve("Welcome to Promise success")
//     }else{
//         reject("Promise Failed")
//     }
// })
// myPromise
// .then((result) =>{
//     console.log(result);
    
// })
// .catch((error) =>{
//     console.log(error);
    
// })
// ***********************************************************************

// async function getData() {
//     let response = await fetch("data.json");
//     let data = await response.json();

//     console.log(data);
// }

// *****************************FETCH API***********************************

// fetch("https://jsonplaceholder.typicode.com/users")
// .then((result) => result.json())
// .then((datas) => {


// let table = `
// <table border="">
// <tr>
//     <th>ID</th>
//     <th>Name</th>
//     <th>Email</th>
//     <th>City</th>
// </tr>
// `;
//     datas.map((user) =>{
//     table += `
//     <tr>
//         <td>${user.id}</td>
//         <td>${user.name}</td>
//         <td>${user.email}</td>
//         <td>${user.city}</td>
//     </tr>
//     `;
//     })
//     table += `<table>`;
//     document.getElementById("tableData").innerHTML = table;
// });

//*************************************FOR LOOP**************** */

let numloop = [10, 20, 30, 40, 50, 60];
// console.log(numloop);

for(let i=0; i<numloop.length; i++){
    console.log(numloop[i]);
}

let colors = ["red", "black", "white", "orange"]
console.log(colors);

for(let i=0; i<colors.length; i++){
    console.log(colors[i]);
    
}

//*************************************ARRAY PUSH POP METHOD**************** */
let colorses = ["red", "black", "white", "orange"]

colorses.push =("Violet");
console.log(colorses);

colorses.pop();
console.log(colorses);

colorses.shift()
console.log(colorses);

colorses.unshift("Pink");
console.log(colorses);

//**************************************LOCAL STORAGE******************************* */
// localStorage.setItem("name1", "Gowthami");
// let name1 = localStorage.getItem("name");
// console.log(name);
//**************************************************************************************** */
let str = "WELCOME";
let result = str.split("").reverse().join("");
console.log(result);
// ******************************************************************************************/
let numberss = [12, 30, 45, 99, 65, 3]
let largest = Math.max(...numberss)
console.log(largest);
let smalest = Math.min(...numberss)
console.log(smalest);

let char = "Gowthami"
console.log(char.length);

let evenOdd = [2, 11, 4, 5, 7, 22, 31]

let even = evenOdd.filter(num => num % 2 === 1)
console.log(even);
// **********************************************************************************************//
document.getElementById("butn").addEventListener("click", () => {
    alert("button clicked")
})

var d= 400;
{
    var d=400;
}
let e = d;
{
    let d=-400;
}
console.log(d);
// ****************************************************************************************************

let color = "GOWTHAMI"

let colorRev = color.split("").reverse().join()
console.log(colorRev)
// ***************************************************************************************
let arr = [25, 5, 100, 10, 1];

let shor = arr.sort((a, b) => (b - a))
console.log(shor)

let colorsss = ["red", "orange", "black"]

// let coloup = colorsss.map((item, index) => {
//     return item.toLowerCase()
// })
// console.log(coloup)
    let corprint = colorsss.filter((item) => item === "orange") .join("")
    
    console.log(corprint)
    // CURRING FUNCTION

    function adding(a){
        return function b(b){
           return function c(c){
             return function d(d){
                    return a+b+c+d
                }
            }
        }
    }
    console.log(adding(5)(5)(5)(5))

    console.log([] === []);//fale
    console.log([] == [])//false

    const obj = {test:"Gows"}
    const obj2 = obj;
        obj2.test = "diya"

    console.log(obj, obj2)

    let chart = [10, 20, 30, "c", "Gowthami", 7, 9, "diya", "j", "n"]

    let separate = chart.filter((item) => typeof item === "number")
    let charter = chart.filter(items => typeof items === "string" && items.length > 1)
    let charword = chart.filter(item => typeof item === "string" && item.length == 1)
    console.log(separate)
    console.log(charter)
    console.log(charword)

    function outer(){
        let count = 5;
        function inner(){
            count ++;
            return count;
        }
        return inner;
    }
    let res = outer()
    console.log(res())
    console.log(res())

    // *********************************************************************************
    // FOR IN AND FOR OF











