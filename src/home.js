//import "./css/main.css";
import "./css/home.css"
import bgImg from "./images/ghibli-banner.png";
import img1 from './images/food1.jpg';
import img2 from './images/food2.jpeg';

function Home (){
    const container = document.getElementById("content");
    const introduction = document.createElement("div");
    introduction.className = "introduction";

    const banner = () => {
        const banner = document.querySelector(".banner");
        const title = document.querySelector(".title");
        banner.style.backgroundImage = `url(${bgImg})`;
        title.textContent = "Le Restaurant";
    }
    const textBlock = (titleContent, paraContent, imgSrc, dir) =>{
        const block = document.createElement("div");
        const title = document.createElement("h2");
        const subContainer = document.createElement("div")
        const para = document.createElement("p");
        const img = document.createElement("img");
        block.className = "block";
        title.className = "title";
        title.textContent = titleContent;
        subContainer.className = "content";
        para.textContent = paraContent;
        img.setAttribute("src", imgSrc);
        introduction.appendChild(block);
        block.appendChild(title);
        block.appendChild(subContainer);
        if (dir == "left"){
            subContainer.appendChild(img);
            subContainer.appendChild(para);

        } else if(dir =="right"){
            subContainer.appendChild(para);
            subContainer.appendChild(img);
        }
    }
    const intro = () => {
        introduction.innerHTML = "";
        container.appendChild(introduction);
    }
    return {banner, intro, textBlock}
}
const createHome = Home();
const showHome = ()=> {
    createHome.banner();
    createHome.intro();
    createHome.textBlock("NEW EXPERIENCE", "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam itaque quaerat laborum facere harum vel, beatae quibusdam illo exercitationem doloribus! Ex suscipit placeat assumenda nulla deleniti tenetur magni doloremque ipsam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam itaque quaerat  laborum facere harum vel, beatae quibusdam illo exercitationem doloribus! Ex suscipit placeat assumenda nulla deleniti tenetur magni doloremque ipsam.", img1, "right");
    createHome.textBlock("OLD EXPERIENCE", "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam itaque quaerat laborum facere harum vel, beatae quibusdam illo exercitationem doloribus! Ex suscipit placeat assumenda nulla deleniti tenetur magni doloremque ipsam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam itaque quaerat  laborum facere harum vel, beatae quibusdam illo exercitationem doloribus! Ex suscipit placeat assumenda nulla deleniti tenetur magni doloremque ipsam.", img2, "left");
}
export default showHome;
