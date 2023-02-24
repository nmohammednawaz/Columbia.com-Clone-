let home=document.querySelector("#home");
home.addEventListener("click",()=>{
    window.location.href="index.html";
});


let UserForm=JSON.parse(localStorage.getItem('user'))||[];
let formSubmit=document.querySelector("#form");
formSubmit.addEventListener("submit",register);


function register(e){
     e.preventDefault();

    
     let   email=document.querySelector("#email").value;
     let   password=document.querySelector("#password").value;
     let   verifyPassword=document.querySelector("#verifyPass").value
     let   firstName=document.querySelector("#firstName").value
     let   lastName=document.querySelector("#lastName").value
     let   ZipCode=document.querySelector("#ZipCode").value
     let   phone=document.querySelector("#Phone").value
     let   ele=document.getElementsByName("gender");
             for(let i=0;i<ele.length;i++){
                if(ele[i].checked){
                    gender=ele[i].value;
                }
             }
     let    BirthMonth=document.querySelector("#birthMonth").value
     let    BithDay=document.querySelector("#birthDay").value
     let    sendEmail=document.getElementById("checkbox");
            if(sendEmail.checked){
                 sendEmail=true;
            }
     let    greaterReward=document.getElementById("checkbox1");
            if(greaterReward.checked){
                greaterReward=true;
            }


      //for mobile length 
    
    if (document.querySelector("#Phone").value.length !=10){
        alert("Invalid Mobile Number!!");
        document.querySelector("#Phone").value="";
        return;
    }
 
     
     //for password match
     
     
     if(password.value != verifyPassword.value){
         alert("Passwords do not match!!");
         document.querySelector("#password").value="";
         document.querySelector("#verifyPass").value="";
         return;
     }else{
         alert("Welcome to fabrica!!!");   
     }       

    
   UserForm.push({email,password,verifyPassword,firstName,lastName,ZipCode,phone,gender,BirthMonth,BithDay,sendEmail,greaterReward});
    
   

   localStorage.setItem('user',JSON.stringify(UserForm));
    
}
