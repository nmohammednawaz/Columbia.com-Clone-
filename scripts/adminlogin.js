let loginBtn = document.getElementById("admin-login-form");




loginBtn.addEventListener("submit", (event) => {

    event.preventDefault();
    let password = document.getElementById("admin-password").value; 
    if(loginBtn.username.value == "admin"){
        if(password == "admin"){
            alert("Login Successfull..!");
            window.location.href = "./admin.html";
        }else{
            alert("Incorrect Password");
        }
    }else{
        alert("Invalid Credentials");
    }
    console.log(password)
})