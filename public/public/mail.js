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
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref("contactForm");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var msgContent = getElementVal("msgContent");
  
    saveMessages(name, emailid, msgContent);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (name, emailid, msgContent) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      emailid: emailid,
      msgContent: msgContent,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };