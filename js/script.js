const cart  = document.querySelectorAll(".cart");
const totalPrice = document.querySelector(".totalprice");

let summary = 0;

cart.forEach((elem) => {
    elem.addEventListener("click", () => {
        elem.classList.toggle("cart-active");
        if (elem.classList.contains("cart-active")) {
        summary = summary + Number(elem.getAttribute("data-price"));
        } else {
        summary = summary - Number(elem.getAttribute("data-price")); 
        }
        totalPrice.textContent = summary + "$";
    });
});
