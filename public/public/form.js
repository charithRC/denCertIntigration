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
  var contactFormDB = firebase.database().ref("CertificateForm");
} catch (error) {
  console.log(error)
}

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var CourseName = getElementVal("CourseName");
  var StartDate = getElementVal("StartDate");
  var EndDate = getElementVal("EndDate");
  var SupervisorName = getElementVal("SupervisorName");
  //var CertificationName = getElementVal("CertificationName");
  saveMessages(name, emailid, CourseName, StartDate, EndDate, SupervisorName );

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, CourseName, StartDate, EndDate, SupervisorName) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    CourseName: CourseName,
    StartDate: StartDate,
    EndDate: EndDate,
    SupervisorName: SupervisorName,
    // CertificationName: CertificationName
  });
  console.log("www.codentechnologies.com/MyCertificate.html?certID=" + newContactForm.key);
  document.querySelector(".alert").style.display = "block";
  document.getElementById("alertMsg").innerHTML = " www.codentechnologies.com/MyCertificate.html?certID=" + newContactForm.key;

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 8000);
};

const getElementVal = (id) => {
  debugger;
  return document.getElementById(id).value;
};
