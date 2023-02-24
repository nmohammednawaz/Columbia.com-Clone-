
var storedData=JSON.parse(localStorage.getItem("user"));

    document.querySelector("#submit").addEventListener("click",check);

    function check(){
        var email=document.querySelector("#email").value;
        var password=document.querySelector("#password").value;
        let flag1=false;
        let flag2=false;

        for(let i=0;i<storedData.length;i++){
            if(storedData[i].email===email  && storedData[i].password===password){
                flag1=true;
                flag2=true;
            }
           
        }
        if(flag1==true && flag2==true){
            alert("Login Successful!!");
            window.location.href="index.html";
        }else{
            alert("Login Failed! Please Try Again!!");
        }
    }
