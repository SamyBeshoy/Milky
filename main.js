// get elements from html
let span = document.querySelector(".top");
let landing = document.getElementById("landing");
let flag = true;
window.onscroll = function () {
    this.scrollY >= 500 ? span.classList.remove("show") : span.classList.add("show");
};
span.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};
setInterval(() => {
    if (flag) {
        landing.style.cssText = `
        background-image: url("imgs/carousel-2.jpg");
        transition: all 0.5s;
        `;
    } else {
        landing.style.cssText = `
        background-image: url("imgs/carousel-1.jpg");
        transition: all 0.5s;
        `;
    }
    flag = !flag;
}, 10000);