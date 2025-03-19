
const container = document.getElementById("links-container")
const links = [
    {
        name: "Etch A Sketch",
        link: "https://woodenbrick1.github.io/Etch_A_Sketch/",
        image: "./images/etch-a-sketch.PNG",
        description: "A program where you can draw! Also you can select the size of the canvas you wish to draw on"
    },
    {
        name: "Tic-Tac-Toe",
        link: "https://woodenbrick1.github.io/Tic-Tac-Toe/",
        image: "/images/tic-tac-toe.PNG",
        description: "Tic Tac Toe, cmon you know how tic tac toe works."
    },
    {
        name: "To Do List",
        link: "http://woodenbrick1.github.io/To-do-List/",
        image: "./images/to-do-list.PNG",
        description: "A program that allows you to create to-do lists, also having files to categorize the type of to-dos"
    },
    {
        name: "Ice Cream",
        link: "https://woodenbrick1.github.io/Restaurant-Page/",
        image: "./images/icecream.PNG",
        description: "A mockup for an ice-cream shop"
    },
    {
        name: "Library",
        link: "https://woodenbrick1.github.io/Library/",
        image: "./images/library.PNG",
        description: "Library where you can store books that you read or want to read in the future."
    },
    {
        name: "Calculator",
        link: "https://woodenbrick1.github.io/Calculator/",
        image: "./images/calculator.PNG",
        description: "A calculator, you can do maths and stuff."
    },
    {
        name: "Weather App",
        link: "https://woodenbrick1.github.io/Weather-App/",
        image: "./images/weather.PNG",
        description: "A program where you can input the name of a country and it gives you the weather forecast for the upcoming 5 days."
    }
    
    
]

const renderLinks = () => {

    for (const link of links) {
     
        const linkDiv = document.createElement('div');
        linkDiv.classList.add('link');


        const desc = document.createElement('p');
        desc.classList.add('desc');
        desc.textContent = link.description;  

   
        const a = document.createElement('a');
        a.href = link.link;  

       
        const img = document.createElement("img");
        img.src = link.image;  
        img.classList.add("linkImg");

        
        a.appendChild(img);

        const buttons = document.createElement("div");
        buttons.classList.add("buttons");

     
        const buttonDesc = document.createElement("button");
        buttonDesc.classList.add("descBtn");
        
        const descLogo = document.createElement("img");
        descLogo.classList.add("descLogo");
        descLogo.src = "./images/notepad-icon.jpg";

        buttonDesc.addEventListener("click", () => {
            if (!desc.classList.contains("visible")) {
                desc.classList.add("visible");
                a.classList.add("inactiveLink");
            }
            else {
                desc.classList.remove("visible");
                a.classList.remove("inactiveLink");
            }
        })

        desc.addEventListener("click", () => {
            if (desc.classList.contains("visible")) {
                desc.classList.remove("visible");
                a.classList.remove("inactiveLink");
            }
        })
        buttonDesc.appendChild(descLogo);
        buttons.appendChild(buttonDesc);

        linkDiv.appendChild(desc);
        linkDiv.appendChild(a);
        linkDiv.appendChild(buttons);


         container.appendChild(linkDiv);
    }
    
}
window.addEventListener("DOMContentLoaded", () =>{
 renderLinks();
});