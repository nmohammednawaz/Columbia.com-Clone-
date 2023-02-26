let curUsr = JSON.parse(localStorage.getItem("current-user"));
let goToAcoount = document.getElementById("go-to-account");

console.log(goToAcoount)

goToAcoount.addEventListener("clcik", () => {
    if(curUsr == null){
        window.location.href = "./logIn.html";
    }else{
        window.location.href = "./account.html";
    }
})