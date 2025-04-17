//import "./css/main.css";
import "./css/menu.css";
import bgImg from "./images/menu-banner.png";
import img1 from "./images/menu1.png";
import img2 from "./images/menu2.jpg";
import img3 from "./images/menu3.jpg";
import img4 from "./images/menu4.jpg";
import img5 from "./images/menu5.png";

function Menu () {
    const content = document.getElementById("content");
    const banner = () => {
        const banner = document.querySelector(".banner");
        const title = document.querySelector(".title");
        banner.style.backgroundImage = `url(${bgImg})`;
        title.textContent = "Menu";
    }
    const block = (titleContent, imgContent, paraContent) =>{
        const container = document.createElement("div");
        const img = document.createElement("img");
        const title = document.createElement("h2");
        const para = document.createElement("p");
        container.className = "container";
        img.setAttribute("src", imgContent);
        para.textContent = paraContent;
        title.textContent = titleContent;
        content.appendChild(container);
        container.appendChild(img);
        container.appendChild(para);
        container.appendChild(title);
    }
    return{banner, block}
}
const createMenu = Menu();
const showMenu = ()=> {
    createMenu.banner();
    createMenu.block("Apéritif", img1, "Arrive.");
    createMenu.block("Entrée", img2, "Have a taste.");
    createMenu.block("Plat principal", img3, "Endulge.");
    createMenu.block("Salade", img4, "Rejoice.");
    createMenu.block("Dessert", img5, "Repeat.");
}
export default showMenu;