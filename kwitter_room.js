
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyDCpfmfCX_y7-miudr2Ob56odnllmpgSYA",
      authDomain: "kwitter-e30d8.firebaseapp.com",
      projectId: "kwitter-e30d8",
      storageBucket: "kwitter-e30d8.appspot.com",
      messagingSenderId: "471655759530",
      appId: "1:471655759530:web:d1617afef58a37dc355ad3"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
