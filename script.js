
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
        // image:
    },
    {
        name: "To Do List",
        link: "http://woodenbrick1.github.io/To-do-List/",
        // image:
    },
    {
        name: "Ice Cream",
        link: "https://woodenbrick1.github.io/Restaurant-Page/",
        // image:
    },
    {
        name: "Library",
        link: "https://woodenbrick1.github.io/Library/",
        // image:
    },
    {
        name: "Calculator",
        link: "https://woodenbrick1.github.io/Calculator/",
        // image:
    },
    {
        name: "Weather App",
        link: "https://woodenbrick1.github.io/Weather-App/",
        // image:
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