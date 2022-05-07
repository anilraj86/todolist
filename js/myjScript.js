// call back function

function validateLogin()
{
    var username=document.getElementById('lusername');
    var password=document.getElementById('lpassword');
    getData(username.value,password.value,redirectLog);
    
}

function getData(logName,logPass,logRedirect){
    if(logName ="admin" && logPass=="12345")
    {
        logRedirect();
    }
    else
    {
        alert("Please check the Login details!!")
    }
}

function redirectLog(){
    window.location.href="home.html";
}