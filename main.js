var eml = document.getElementById("email");
var pass = document.getElementById("password");

eml.addEventListener("click",() =>{
    if(eml.click){
        eml.style.border = "1px solid #3b5998";
        eml.style.borderColor = "#3b5998";
    }
    else if(pass.style.borderColor){
        eml.style.borderColor = "none";
    }
    
})

pass.addEventListener("click",() =>{
    if(pass.click){
        pass.style.border = "1px solid #3b5998";
        pass.style.borderColor = "#3b5998";
    }
    
})