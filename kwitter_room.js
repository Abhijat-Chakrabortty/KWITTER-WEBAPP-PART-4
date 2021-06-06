// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyCuoJpm3Hg12qf2BXJd6DrRAR5ACr-7q_Y",
      authDomain: "kwitter-a2cf4.firebaseapp.com",
      databaseURL: "https://kwitter-a2cf4-default-rtdb.firebaseio.com",
      projectId: "kwitter-a2cf4",
      storageBucket: "kwitter-a2cf4.appspot.com",
      messagingSenderId: "900942762927",
      appId: "1:900942762927:web:146ac453381e98b0f3155a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "welcome " + user_name + " !";

function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("room name " + Room_names);
                  row="<div class='room_name' id=" + Room_names + "onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div> <hr>";
                  document.getElementById("output").innerHTML += row;
                  //End code
            });
      });
}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}