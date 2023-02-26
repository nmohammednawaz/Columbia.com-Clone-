let curr_user = JSON.parse(localStorage.getItem("current-user"));

let showAddresses = document.getElementById("show-address");
let addressLine = document.getElementById("address-line");

let goToHomeBtn = document.getElementById("go-to-home");

goToHomeBtn.addEventListener("click", () => {
    window.location.href = "./index.html";
})

let addAddressBtn = document.getElementById("add-adress");

addAddressBtn.addEventListener("click", () => {
    window.location.href = "./addAddress.html";
})


function createAddress(curr_user_address){

    let addressType = document.createElement("h5");
        addressType.innerText = curr_user_address.addressType;

    let name = document.createElement("p");
        name.innerText = curr_user_address.name;

    let address1 = document.createElement("p");
        address1.innerText = curr_user_address.address1;

    let area = document.createElement("p");
        area.innerText = curr_user_address.area;

    let cityPinCode = document.createElement("p");
        cityPinCode.innerText = curr_user_address.city + ", " + curr_user_address.pincode;

    let country = document.createElement("p");
        country.innerText = curr_user_address.country;

    let phone = document.createElement("p");
        phone.innerText = curr_user_address.phone;

    let editBtn = document.createElement("button");
        editBtn.innerText = "Edit";

    let dltBtn = document.createElement("button");
        dltBtn.innerText = "Delete";

    let hrline = document.createElement("hr");
        hrline.classList.add("profile-hr");

    addressLine.append(addressType, name, address1, area, cityPinCode, country, phone, editBtn, dltBtn, hrline)
    // showAddresses.append(addressLine);

}

curr_user.address.forEach(address => {
    createAddress(address);
});


