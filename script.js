
const container = document.getElementById("links-container")
const links = [
    {
        name: "Etch A Sketch",
        link: "https://woodenbrick1.github.io/Etch_A_Sketch/",
        image: "./images/etch-a-sketch.PNG",
        description: "A program where you can draw! Also you can select the size of the canvas you wish to draw on",
        git: "https://github.com/WoodenBrick1/Etch_A_Sketch"
    },
    {
        name: "Tic-Tac-Toe",
        link: "https://woodenbrick1.github.io/Tic-Tac-Toe/",
        image: "./images/tic-tac.PNG",
        description: "Tic Tac Toe, cmon you know how tic tac toe works.",
        git: "https://github.com/WoodenBrick1/Tic-Tac-Toe"
    },
    {
        name: "To Do List",
        link: "http://woodenbrick1.github.io/To-do-List/",
        image: "./images/to-do-list.PNG",
        description: "A program that allows you to create to-do lists, also having files to categorize the type of to-dos",
        git: "http://github.com/WoodenBrick1/To-do-List"
    },
    {
        name: "Ice Cream",
        link: "https://woodenbrick1.github.io/Restaurant-Page/",
        image: "./images/icecream.PNG",
        description: "A mockup for an ice-cream shop",
        git: "http://github.com/WoodenBrick1/Restaurant-Page"
    },
    {
        name: "Library",
        link: "https://woodenbrick1.github.io/Library/",
        image: "./images/library.PNG",
        description: "Library where you can store books that you read or want to read in the future.",
        git: "https://github.com/WoodenBrick1/Library"
    },
    {
        name: "Calculator",
        link: "https://woodenbrick1.github.io/Calculator/",
        image: "./images/calculator.PNG",
        description: "A calculator, you can do maths and stuff.",
        git: "https://github.com/WoodenBrick1/Calculator"
    },
    {
        name: "Weather App",
        link: "https://woodenbrick1.github.io/Weather-App/",
        image: "./images/weather.PNG",
        description: "A program where you can input the name of a country and it gives you the weather forecast for the upcoming 5 days.",
        git: "https://github.com/WoodenBrick1/Weather-App"
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

        const buttonGit = document.createElement("a");
        buttonGit.classList.add("gitBtn");
        buttonGit.href = link.git;

        const gitLogo = document.createElement("img");
        gitLogo.classList.add("gitLogo");
        gitLogo.src = "./images/github-icon.png";

        buttonDesc.appendChild(descLogo);
        buttonGit.appendChild(gitLogo);
        buttons.appendChild(buttonDesc);
        buttons.appendChild(buttonGit);

        linkDiv.appendChild(desc);
        linkDiv.appendChild(a);
        linkDiv.appendChild(buttons);


         container.appendChild(linkDiv);
    }
    
}
window.addEventListener("DOMContentLoaded", () =>{
 renderLinks();
});