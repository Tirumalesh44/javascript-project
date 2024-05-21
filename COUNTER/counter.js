let btn_increase = document.querySelector(".btn-inc");
let btn_reset = document.querySelector(".btn-res");
let btn_decrease = document.querySelector(".btn-dec");
let span = document.querySelector("#spanid");
let counter=0;

btn_increase.addEventListener("click", () => {
    counter+=1;
    span.textContent = counter;
    span.style.color = "green";
});
btn_decrease.addEventListener("click", () => {
    counter-=1;
    span.textContent = counter;
    span.style.color = "red";
});
btn_reset.addEventListener("click", () => {
    counter=0;
    span.textContent = counter;
    span.style.color = "black";
});