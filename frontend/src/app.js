import HomeScreen from "./screens/HomeScreen.js";
const router = () =>{
    const mmain = document.getElementById("main-container");
    mmain.innerHTML = HomeScreen.render();
};
window.addEventListener('load', router);