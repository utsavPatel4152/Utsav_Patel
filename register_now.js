function onRegister() {

    var datas = new Object();
    datas.Name = document.getElementById('nameReg').value;
    datas.Email = document.getElementById('emailReg').value;
    datas.Password = document.getElementById('passwordReg').value;
    datas.ConfirmPassword = document.getElementById('confirmPasswordReg').value;
    datas.City = document.getElementById('cityReg').value;
    datas.State = document.getElementById('stateReg').value;


    if (datas.Name == '' || datas.Email == '' || datas.Password == '' || datas.ConfirmPassword == '' ||
        datas.City == '' || datas.State == '') {
        alert("Every field is Required");
    }

    else if (datas.Password != datas.ConfirmPassword) {
        alert("Password not match");
    }

    else {
        localStorage.setItem('nameKey', datas.Name);
        localStorage.setItem('emailKey', datas.Email);
        localStorage.setItem('passwordKey', datas.Password);
        window.location.href = "Login.html";
    }
}