
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
        container.innerHTML += 
        `<div class="link">
            <p class="desc">${link.description}</p>
            <a href="${link.link}"> 
                <img src="${link.image}" class="linkImg"></img>
            </a>
            <div class="descBtn"></div>
        </div>`
    }
    
}
window.addEventListener("DOMContentLoaded", () =>{
 renderLinks();
});