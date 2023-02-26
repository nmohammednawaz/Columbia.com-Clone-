let form = document.getElementById("add-address-form");
let curr_user = JSON.parse(localStorage.getItem("current-user"));



form.addEventListener("submit", (event) => {
    event.preventDefault();

    let address = {
        addressType: form.adres.value,
        name: form.name.value,
        address1: form.line.value,
        area: form.area.value,
        city: form.city.value,
        pincode: form.pin.value,
        country: form.country.value,
        phone: form.contact.value
    }

    curr_user.address.push(address);
    localStorage.setItem("current-user", JSON.stringify(curr_user));

    alert("Address Added Successfully..!");
    window.location.href = "./address.html";
})