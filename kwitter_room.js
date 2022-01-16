var firebaseConfig = {
  apiKey: "AIzaSyCW9QmO8Ciq4rQLiWukFNuFsJc0wTTcKKs",
  authDomain: "letschatwebapp-95a9b.firebaseapp.com",
  projectId: "letschatwebapp-95a9b",
  storageBucket: "letschatwebapp-95a9b.appspot.com",
  messagingSenderId: "1038185656596",
  appId: "1:1038185656596:web:f98d5906075af55625d201"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("Username");
document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";

function addroom() {
       room_name = document.getElementById("room_name").value;

       firebase.database().ref("/").child(room_name).update({
            purpose: "Adding Room Name"
      });

      localStorage.setItem("Roomname",room_name);
  
      window.location = "Kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
 Room_names = childKey;
//Start code
      console.log("room_name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToroomname(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
//End code
});});}
getData();
function redirectToroomname(name){
console.log(name);
localStorage.setItem("Roomname",name);
window.location = "kwitter_page.html";
}
function logout() {
localStorage.removeItem("Username");
localStorage.removeItem("Roomname");
window.location = "index.html";
}