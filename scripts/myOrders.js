let curr_user = JSON.parse(localStorage.getItem("current-user"));

let myOrdersLine = document.getElementById("orders-line");
let updateOrders = document.getElementById("update-myorders-text");

let goToHomeBtn = document.getElementById("go-to-home");

goToHomeBtn.addEventListener("click", () => {
    window.location.href = "./index.html";
})

function createAddress(curr_user_orders){

    let orderId = document.createElement("p");
        orderId.innerText = "Id: " + curr_user_orders.id;

    let orderPlacedOn = document.createElement("p");
        orderPlacedOn.innerText = "Order Placed On: " + curr_user_orders.orderPlaced;

    let totalItems = document.createElement("p");
        totalItems.innerText = "Total Items: " + curr_user_orders.items;

    let totalPrice = document.createElement("p");
        totalPrice.innerText = "Total Price: " + curr_user_orders.totalPrice;

    let hrline = document.createElement("hr");
        hrline.classList.add("profile-hr");

    myOrdersLine.append(orderId, orderPlacedOn, totalItems, totalPrice, hrline)

}

let orders_length = curr_user.orders.length;
if(orders_length == 0){
    updateOrders.style.display = "block";
}else{
    curr_user.orders.forEach(myOrders => {
        createAddress(myOrders)
    })
}