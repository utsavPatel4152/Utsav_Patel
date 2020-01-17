var Name = document.getElementById('nameUser');
var Email = document.getElementById('emailUser');
var Password = document.getElementById('passwordUser');
var BirthDate = document.getElementById('BirthDateUser');
var age;
var userDetails = [];

var user = function (Name, Email, Password, BirthDate, age) {
    this.Name = Name,
        this.Email = Email,
        this.Password = Password,
        this.BirthDate = BirthDate,
        this.age = age
}

if (localStorage.getItem('user') == null) {
    localStorage.setItem('user', userDetails);
}
else {
    userDetails = JSON.parse(localStorage.getItem('user'));
    displayData();
}

function onAdd() {
    if (Name.value == '' || Email.value == '' ||
        Password.value == '' || BirthDate.value == '') {
        alert('Every fields are Required');
    }

    else {
        insertData();
    }
}
function insertData() {
    var check = BirthDate.value;

    var check2 = parseInt(check.substring(0, 4));

    userDetails.push(new user(Name.value, Email.value, Password.value, BirthDate.value, check2.value));

    localStorage.setItem('BDateKey', datas.BirthDate);
    localStorage.setItem('user', JSON.stringify(userDetails));
    console.log(JSON.parse(localStorage.getItem('user')));

    displayData();
}

function displayData() {

    for (var i = 0; i < userDetails.length; i++) {
        document.getElementById('userTable').innerHTML += '<tr><td>' +
            userDetails[i].Name + '</td><td>' +
            userDetails[i].Email + '</td><td>' +
            userDetails[i].Password + '</td><td>' +
            userDetails[i].BirthDate + '</td><td>' +
            userDetails[i].Age + '</td><td><a href="">Edit</a>&nbsp;<a href="">Delete</a></td></tr>';
    }
}