function onLogin() {
    var email = document.getElementById('emailLogin');
    var password = document.getElementById('passwordLogin');
    var jsonData = JSON.parse(localStorage.getItem('user'));

    if (email.value == '' || password.value == '') {
        alert("Can not be empty field");
    }

    else if ((email.value == localStorage.getItem('emailKey')) &&
        (password.value == localStorage.getItem('passwordKey'))) {
        window.location.href = "Dashboard.html";
    }

    else {
        for (var i = 0; i < jsonData.length; i++) {
            if (email.value == jsonData[i].Email && password.value == jsonData[i].Password) {
                window.location.href = "Dashboard.html";
            }
            else {
                break;
            }
        }
        alert("Invalid Email or Password");
    }
}