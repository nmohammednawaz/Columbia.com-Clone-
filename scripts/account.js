let tableBody = document.getElementById("table-body");
let greetUserName = document.getElementById("greet-user");

let currentUser = JSON.parse(localStorage.getItem("current-user"));

let noOrdersDisplay = document.getElementById("no-orders-display");

greetUserName.innerText = "Welcome "+currentUser.name;


function createRecentOrdersList(order){
    let row = document.createElement("tr");
        let orderId = document.createElement("td");
            orderId.innerText = order.id;

        let orderPlacedAt = document.createElement("td");
            orderPlacedAt.innerText = order.orderPlaced;

        let orderTotal = document.createElement("td");
            orderTotal.innerText = +order.totalPrice;
        
        row.append(orderId, orderPlacedAt, orderTotal);
        tableBody.append(row);
}

if(currentUser.orders.length == 0){
    noOrdersDisplay.style.display = "block";
}else{
    for(let i = currentUser.orders.length - 1; i >= 0; i--){
        createRecentOrdersList(currentUser.orders[i]);
    }
}