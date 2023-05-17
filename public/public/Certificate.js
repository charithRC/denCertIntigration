const firebaseConfig = {
    apiKey: "AIzaSyDoNy4z5rgRiL4jkbF-Vt7caZ-RObQkbPM",
    authDomain: "website-89f67.firebaseapp.com",
    databaseURL: "https://website-89f67-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "website-89f67",
    storageBucket: "website-89f67.appspot.com",
    messagingSenderId: "559110525214",
    appId: "1:559110525214:web:25ce1424a997ce465c390f",
    measurementId: "G-K3X6JYDRNQ"
};
// initialize firebase
const test = firebase.initializeApp(firebaseConfig);

// reference your database
try {
    var contactFormDB = firebase.database().ref("contactForm");
} catch (error) {
    console.log(error)
}

var database = firebase.database();
var ref = database.ref('/contactForm');
//var id = '-NVe2vn0RieSe4vkzmZK';
var urlParams = new URLSearchParams(window.location.search);
var id = urlParams.get('certID');
//console.log(id);
var data;
ref.child(id).once('value', function (snapshot) {
    data = snapshot.val();
    console.log(data);
    document.getElementById("StudentName").innerHTML = data.name;
    document.getElementById("Course").innerHTML = data.CourseName;
    document.getElementById("Duration").innerHTML = data.StartDate + "-" + data.EndDate;
    document.getElementById("Supervisor").innerHTML = data.SupervisorName;
    document.getElementById("certID").innerHTML = "Certification ID: " +id;
});

  // Replace in HTML

