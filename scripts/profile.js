let showProfileDetails = document.getElementById("show-profile");

let currentusr = JSON.parse(localStorage.getItem("current-user"));

let pass = "";
for(let i = 0; i < currentusr.password.length; i++){
    pass += "*";
}

createUserProfile(currentusr);

function createUserProfile(cuurentUser){
    showProfileDetails.innerHTML = `
        <h4>My Profile</h4>
        <hr class="profile-hr">
        <h5>NAME</h5>
        <p>${cuurentUser.name}</p>
        <h5>PHONE NUMBER</h5>
        <p>${cuurentUser.phone}</p>
        <h5>ZIP CODE</h5>
        <p>${cuurentUser.zipCode}</p>
        <h5>GENDER</h5>
        <p>${cuurentUser.gender}</p>
        <h5>BIRTHDAY</h5>
        <p>${cuurentUser.Birthday}</p>
        <br>
        <h4>My Login Info</h4>
        <hr class="profile-hr">
        <h5>EMAIL ADDRESS</h5>
        <p>${cuurentUser.email}</p>
        <h5>PASSWORD</h5>
        <p>${pass}</p>
        <br>
        <h4>Notifications</h4>
        <hr class="profile-hr">
        <p>You are <span>opted out</span> for receiving marketing emails.</p>
        <br>
        <button id="edit-my-account">EDIT MY ACCOUNT</button>
    `;
}