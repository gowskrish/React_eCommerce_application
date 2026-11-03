**JAVASCRIPT Notes;**

**Object Loop;**



items.map((item) => {

&#x20; if (typeof item === "object") {

&#x20;   

&#x20;   Object.keys(item).map((key) => {

&#x20;     if (key === "age") {

&#x20;       console.log(item\[key]);

&#x20;     }

&#x20;   });



&#x20; }

});

