// document.addEventListener("DOMContentLoaded", () => {
//     const menuToggle = document.getElementById("menuToggle");
//     const menuBar = document.getElementById("menuBar");

//     if (menuToggle && menuBar) {
//         const setMenuState = (isOpen) => {
//             menuBar.classList.toggle("active", isOpen);
//             menuToggle.setAttribute("aria-expanded", String(isOpen));
//         };

//         menuToggle.addEventListener("click", () => {
//             const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
//             setMenuState(!isExpanded);
//         });
//     }

//     const disableSuggestions = (element) => {
//         if (!element || !(element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement)) {
//             return;
//         }

//         element.setAttribute("autocomplete", "off");
//         element.setAttribute("autocorrect", "off");
//         element.setAttribute("autocapitalize", "off");
//         element.setAttribute("spellcheck", "false");
//         element.setAttribute("aria-autocomplete", "none");
//     };

//     document.querySelectorAll("input, textarea").forEach((element) => {
//         disableSuggestions(element);
//     });

//     document.addEventListener("focusin", (event) => {
//         disableSuggestions(event.target);
//     });
// });



console.log(staff);

var a = 10;
function x (){
    console.log(a);
}