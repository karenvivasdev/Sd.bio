const aboutBtn = document.getElementById("aboutBtn");
const overlay = document.getElementById("aboutOverlay");
const close = document.querySelector(".close");

aboutBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    overlay.classList.add("active");
});

close.addEventListener("click", ()=>{
    overlay.classList.remove("active");
});

overlay.addEventListener("click", (e)=>{
    if(e.target === overlay){
        overlay.classList.remove("active");
    }
});
const hero = document.getElementById("hero");
const profile = document.querySelector(".profile");

hero.addEventListener("mousemove", (e) => {

    const rect = hero.getBoundingClientRect();

    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    hero.style.transform = `rotateY(${x * 6}deg) rotateX(${-y * 6}deg)`;
    profile.style.transform = `translate(${x * 8}px, ${y * 8}px)`;

});

hero.addEventListener("mouseleave", () => {

    hero.style.transform = "rotateY(0) rotateX(0)";
    profile.style.transform = "translate(0,0)";

});
const loader = document.getElementById("loader");

window.addEventListener("load", () => {

    setTimeout(() => {
        loader.classList.add("hide");
    }, 1500);

});