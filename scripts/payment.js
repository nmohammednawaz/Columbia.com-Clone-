let paymentForm = document.getElementById("payment-form");
let curUsr = JSON.parse(localStorage.getItem("current-user"));
let paymentBtn = document.getElementById("payment-btn");
paymentBtn.value = "Pay $" + curUsr.totalPrice;

let orderID = curUsr.orders.length;

paymentForm.addEventListener("submit", (event => {
    event.preventDefault();
    let order = {
        id: orderID + 1,
        orderPlaced: ""+new Date(),
        totalPrice: curUsr.totalPrice,
        items: curUsr.cart.length
    };
    curUsr.orders.push(order);
    curUsr.cart = [];
    localStorage.setItem("current-user", JSON.stringify(curUsr));
    window.location.href = "./index.html";
}))