//import "./CSS/main.css";
import "./CSS/services.css";
import bgImg from "./images/services-banner.jpg";
import img1 from "./images/service1.png";
import img2 from "./images/service2.png";
import img3 from "./images/service3.png";
import img4 from "./images/service4.png";
import img5 from "./images/service5.png";
import img6 from "./images/service6.png";
function Services(){
    const content = document.getElementById("content");
    const gridContainer = document.createElement("div");
    gridContainer.id = "services-container";
    const banner = () => {
        const banner = document.querySelector(".banner");
        const title = document.querySelector(".title");
        banner.style.backgroundImage = `url(${bgImg})`;
        title.textContent = "Services";
    }
    const optionsGrid = () => {
        gridContainer.innerHTML = "";
        content.appendChild(gridContainer);
    }

    const optionsItem = (imgSrc, titleContent) => {
        const gridItem = document.createElement("div");
        gridItem.className = "gridItem";
        const img = document.createElement("img");
        const title = document.createElement("h2");
        img.setAttribute("src", imgSrc);
        title.textContent = titleContent;
        gridItem.appendChild(title);
        gridItem.appendChild(img);
        gridContainer.appendChild(gridItem);
    }
    return {banner, optionsGrid, optionsItem}
}
const createServices = Services();
const showServices = ()=>{
    createServices.banner();
    createServices.optionsGrid();   
    createServices.optionsItem(img1, "Dine-In Service");
    createServices.optionsItem(img2, "To-Go Orders");
    createServices.optionsItem(img3, "Delivery");
    createServices.optionsItem(img4, "Catering");
    createServices.optionsItem(img5, "Online Ordering");
    createServices.optionsItem(img6, "Private Events/Reservations");
}
export default showServices;