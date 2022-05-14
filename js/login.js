document.getElementById("login").addEventListener('click', function(){
    const emailInfo = document.getElementById("emailInput");
    const emailLogin = emailInfo.value;
    const passInfo = document.getElementById('passwordInput');
    const passLogin = passInfo.value;

    if(emailLogin == "saniath@gmail.com" && passLogin == "saniath"){
        window.location.href = 'banking.html';
    }else{
        alert("information is not correct");
    }
})