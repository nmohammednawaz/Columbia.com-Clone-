
let loginBtn = document.getElementById("submit");


let userForm = JSON.parse(localStorage.getItem("user"));
let current_user = JSON.parse(localStorage.getItem("current-user"));

if(current_user == null){
    current_user = null;
}

let present = false;
loginBtn.addEventListener("click", () => {

    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;


    for(let i = 0; i < userForm.length; i++){
        if(userForm[i].email == email){
            present = true;
            if(userForm[i].password == password){
                current_user = userForm[i];
                window.location.href = "./index.html";
                localStorage.setItem("current-user", JSON.stringify(current_user));
                alert(`Welcome ${current_user.name}`);
                break;
            }else{
                alert("Incorrect Password..!");
                password.focus();
            }
        }else{
            present = false;
        }
    }

    if(!present){
        alert("Incorrect Login Credentials");
        email.focus();
        return false;
    }
})