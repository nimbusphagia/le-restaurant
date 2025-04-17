import "./css/main.css";
import  showHome from "./home.js";
import showMenu from "./menu.js";
import showServices from "./services.js";
import showContact from "./contact.js";

function Buttons() {
    const btnArr = Array.from(document.querySelectorAll("button"));
    const cleanPage = ()=>{
        const content = document.querySelector("#content");
        while (content.hasChildNodes()) {
            content.removeChild(content.firstChild);
          }
        const banner = document.createElement("div");
        const title = document.createElement("h1");
        banner.className = "banner";
        title.className = "title";
        content.appendChild(banner);
        banner.appendChild(title);
    }
    const btnLinks = ()=>{
        for(const btn of btnArr){
            btn.addEventListener("click",()=>{
                cleanPage();
                switch(btnArr.indexOf(btn)){
                    case  0:
                        showHome();
                        break;
                    case  1:
                        showMenu();
                        break;    
                    case  2:
                        showServices();
                        break;
                    case  3:
                        showContact();
                        break; 
                }
            })
        }
    }
    
    return {btnLinks}; 
}
const pages = Buttons();
pages.btnLinks();