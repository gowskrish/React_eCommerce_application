const curImage = [
    "./images/Destination(1).png", 
    "./images/Destination.png", 
    "./images/Rectangle14.png",   
    "./images/Destination(1).png",    
    "./images/Rectangle14.png",    
    "./images/Destination.png",    
    "./images/Destination(1).png",    
    "./images/Destination.png",    
    "./images/Destination(1).png",    
    "./images/Destination(1).png"    
]
const imageContainer  = document.getElementById("image_container");
const prevbButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

let currentSlide =0;
console.log(currentSlide);

const imgPerSlide =3;

function displayImage(){
    const start = currentSlide * imgPerSlide;
    const end = start + imgPerSlide;

    const currentImages = curImage.slice(start, end);

    imageContainer.innerHTML = currentImages.map((image) => {
        return `<img src="${image}" alt="Image">`;
    }).join("");
};

displayImage();

nextButton.addEventListener("click", () => {

    if (currentSlide < 2) {
        currentSlide++;
            console.log("Current Slide:", currentSlide);

        displayImage();
    }

});

prevbButton.addEventListener("click", () => {

    if (currentSlide > 0) {
        currentSlide--;
        displayImage();
    }

});
