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
    if (document.getElementById("message").value != '' && document.getElementById("name").value != '') {
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
        html += "<div class=\"me\">" + snapshot.val().message + "</div>";
    else
        html += "<div class=\"you\">" + "<h4>" + snapshot.val().name + "</h4>" + snapshot.val().message + "</div>";
    html += "</li>";
    document.getElementById("cd").innerHTML += html;

    var myDiv = document.getElementById("cd");
    myDiv.scrollTop = myDiv.scrollHeight;
});

var input = document.getElementById("message");
input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("sub").click();

    }
});

function cont() {

    if (document.getElementById("contacts").style.transform == "translateX(-100%)") {
        document.getElementById("contacts").style.transform = "translateX(0%)";
        document.getElementById("contacts").style.width = "20%";
        // document.getElementById("contacts").style.display = "none";
        
    }
    else {
        document.getElementById("contacts").style.width = "0%";
        document.getElementById("contacts").style.transform = "translateX(-100%)";
        // document.getElementById("contacts").style.display = "block";
    }

    // if (document.getElementById("contacts").style.display=="none")
    //     document.getElementById("contacts").style.display="block";
    // else    
    //     document.getElementById("contacts").style.display="none";

}
document.getElementById("menu-button").addEventListener("click", cont)



// var provider = new firebase.auth.GoogleAuthProvider();
// // console.log(provider);

// firebase.auth()
//     .signInWithRedirect(provider).then((result) => {
//         /** @type {firebase.auth.OAuthCredential} */
//         var credential = result.credential;

//         // This gives you a Google Access Token. You can use it to access the Google API.
//         var token = credential.accessToken;
//         // The signed-in user info.
//         var user = result.user;
//         // ...
//     }).catch((error) => {
//         // Handle Errors here.
//         var errorCode = error.code;
//         var errorMessage = error.message;
//         // The email of the user's account used.
//         var email = error.email;
//         // The firebase.auth.AuthCredential type that was used.
//         var credential = error.credential;
//         // ...
//     });

var i=1;
function themechange(){
    i+=1;
    if (i>5)
    i=1;
    document.getElementById("cd").style.backgroundImage = "url(\"wallpapers/"+i+".jpg\")";
}
document.getElementById("theme").addEventListener("click",themechange);