// Import the functions you need from the SDKs you need
// import {initializeApp} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBWOVdpXI4Xbo0Me2uSDfpQL24VnJbd05w",
    authDomain: "arnab-codding-website.firebaseapp.com",
    databaseURL: "https://arnab-codding-website-default-rtdb.firebaseio.com",
    projectId: "arnab-codding-website",
    storageBucket: "arnab-codding-website.appspot.com",
    messagingSenderId: "409678714305",
    appId: "1:409678714305:web:b70e44805e0dad240d8b40"
};

firebase.initializeApp(firebaseConfig);
function login() {
    console.log("New User");
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    console.log("Name: "+name+"\nEmail: "+email);
    if (name.value != '' && email.value != '') {
        firebase.database().ref("Users").push().set({
            "email": email,
            "name": name
        });
    alert("User Registered!!!")
    }
    return false;
}

// firebase.database().ref("Users").on("child_added", function (snapshot) {
//     var html = "";
//     html += "<li>";
//     html += "<div>" + snapshot.val().name + "</div>";
//     html += "<div>" + snapshot.val().email + "</div></li>";
//     document.getElementById("card").innerHTML += html;

// });

document.getElementById("button").addEventListener("click", login);