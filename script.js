
const container = document.getElementById("links-container")
const links = [
    {
        name: "Etch A Sketch",
        link: "https://woodenbrick1.github.io/Etch_A_Sketch/",
        image: "./images/etch-a-sketch.PNG"
    },
    {
        name: "Tic-Tac-Toe",
        link: "https://woodenbrick1.github.io/Tic-Tac-Toe/",
        image: "/images/tic-tac-toe.PNG"
    },
    {
        name: "To Do List",
        link: "http://woodenbrick1.github.io/To-do-List/",
        image: "./images/to-do-list.PNG"
    },
    {
        name: "Ice Cream",
        link: "https://woodenbrick1.github.io/Restaurant-Page/",
        image: "./images/icecream.PNG"
    },
    {
        name: "Library",
        link: "https://woodenbrick1.github.io/Library/",
        image: "./images/library/PNG"
    },
    {
        name: "Calculator",
        link: "https://woodenbrick1.github.io/Calculator/",
        image: "./images/calculator.PNG"
    },
    {
        name: "Weather App",
        link: "https://woodenbrick1.github.io/Weather-App/",
        image: "./images/weather.PNG"
    }
    
    
]

const renderLinks = () => {

    for (const link of links) {
        container.innerHTML += 
        `<div class="link">
            <a href="${link.link}">${link.name}</a>
            <img src="${link.image}"></img>
        </div>`
    }
    
}
window.addEventListener("DOMContentLoaded", () =>{
 renderLinks();
});