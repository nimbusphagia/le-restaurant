//import "./CSS/main.css";
import "./CSS/contact.css";
import bgImg from "./images/contact-banner.png";
function Contact() {
    const content = document.getElementById("content");
    const banner = () => {
            const banner = document.querySelector(".banner");
            const title = document.querySelector(".title");
            banner.style.backgroundImage = `url(${bgImg})`;
            title.textContent = "Contact";
        }
    const info = () =>{
        const container = document.createElement("div");
        container.id = "info-container"
        const title = document.createElement("h1");
        const subtitle1 = document.createElement("h2");
        const para1 = document.createElement("p");
        const subtitle2 = document.createElement("h2");
        const para2 = document.createElement("p");
        const subtitle3 = document.createElement("h2");
        const para3 = document.createElement("p");
        const elementsArr = [title, subtitle1, para1, subtitle2, para2, subtitle3, para3];
        for(const element of elementsArr){
            container.appendChild(element);
        }
        elementsArr[0].textContent = "Want something tasty and with a touch of magic? We're here to help!";
        elementsArr[1].textContent = "🌟 Business Hours:";
        elementsArr[2].textContent = "Monday – Saturday: 8:00 AM – 6:00 PM \n Sunday: Closed (Rest day for broom maintenance)";
        elementsArr[3].textContent = "📍 Location:";
        elementsArr[4].textContent = "Kiki’s Delivery Service \n123 Coastal Breeze Avenue \nKoriko City, Magic Isles";
        elementsArr[5].textContent = "📞 Phone:";
        elementsArr[6].textContent = "(123) 456-7890 \n(Call us for urgent deliveries or friendly chats!)";
        content.appendChild(container);
    }
    return {banner, info}
}
const createContact = Contact();
const showContact = ()=>{
    createContact.banner();
    createContact.info();
}
export default showContact;