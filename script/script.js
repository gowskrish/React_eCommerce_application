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
