let home=document.querySelector("#home");
home.addEventListener("click",()=>{
    window.location.href="index.html";
});
let UserForm=JSON.parse(localStorage.getItem('user'))||[];
let formSubmit=document.querySelector("#form");
formSubmit.addEventListener("submit",register);


function register(){
    // e.preventDefault();

    var obj={
        email:document.querySelector("#email").value,
        password:document.querySelector("#password").value,
        verifyPassword:document.querySelector("#verifyPass").value,
        firstName:document.querySelector("#firstName").value,
        lastName:document.querySelector("#lastName").value,
        ZipCode:document.querySelector("#ZipCode").value,
        phone:document.querySelector("#Phone").value,
        gender:document.querySelector("#radio").value,
        BirthMonth:document.querySelector("#birthMonth").value,
        BithDay:document.querySelector("#birthDay").value,

    }
    
   UserForm.push(obj);
   

   localStorage.setItem('user',JSON.stringify(UserForm));
    
}
