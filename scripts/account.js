let tableBody = document.getElementById("table-body");
let greetUserName = document.getElementById("greet-user");

let userData = JSON.parse(localStorage.getItem("user"));
let currentUser = JSON.parse(localStorage.getItem("current-user"));

let noOrdersDisplay = document.getElementById("no-orders-display");
let logoutBtn = document.getElementById("logout-btn");

/*

if(isPresent == true){
                let deleted = fav_data.filter(el => {
                    if(el.id == element.id){
                        return false;
                    }else{
                        return true;
                    }
                })
                fav_data = deleted;
                localStorage.setItem("favourite", JSON.stringify(fav_data));
            }

*/



logoutBtn.addEventListener("click", () => {
    let updated = userData.filter(user => {
        if(user.email == currentUser.email){
            return false;
        }else{
            return true;
        }
    })
    userData = updated;
    userData.push(currentUser);
    currentUser = null;
    localStorage.setItem("current-user", JSON.stringify(currentUser));
    localStorage.setItem("user", JSON.stringify(userData));
    window.location.href = "./index.html";
})

let goToHomeBtn = document.getElementById("go-to-home");

goToHomeBtn.addEventListener("click", () => {
    window.location.href = "./index.html";
})

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