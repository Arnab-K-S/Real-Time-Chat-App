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

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function sendmessage() {
    console.log("Function executed");
    if (document.getElementById("message").value != '' && document.getElementById("name").value!='') {
        firebase.database().ref("messages").push().set({
            "name": document.getElementById("name").value,
            "message": document.getElementById("message").value
        });
        document.getElementById("message").value = '';
    }
    return false;

}
document.getElementById("sub").addEventListener("click", sendmessage);

firebase.database().ref("messages").on("child_added", function (snapshot) {
    var html = "";
    html += "<li>";
    if (snapshot.val().name == document.getElementById("name").value)
        html += "<div class=\"me\">"+"<h3>"+snapshot.val().name + "</h3>" + snapshot.val().message+"</div>";
    else
        html += "<div class=\"you\">" + "<h4>" + snapshot.val().name + "</h4>" + snapshot.val().message + "</div>";
    html += "</li>";
    document.getElementById("cd").innerHTML += html;

});

var input = document.getElementById("message");
input.addEventListener("keypress", function (event) {
if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("sub").click();
}
});