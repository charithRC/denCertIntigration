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
  debugger;
  // initialize firebase
  const test = firebase.initializeApp(firebaseConfig);
  
  // reference your database
  try {
    var contactFormDB = firebase.database().ref("contactForm");
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
    var CertificationName = getElementVal("CertificationName");
    saveMessages(name, emailid, CourseName,StartDate,EndDate,SupervisorName,CertificationName);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (name, emailid, CourseName,StartDate,EndDate,SupervisorName,CertificationName) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      emailid: emailid,
      CourseName:CourseName,
      StartDate:StartDate,
      EndDate:EndDate,
      SupervisorName:SupervisorName,
      CertificationName:CertificationName
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };