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
room_name = localStorage.getItem("room_name");
function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like: 0
      });
      document.getElementById("msg").value = "";
}

function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code
                        console.log(firebase_message_id);
                        console.log(message_data);
                        name=message_data['name'];
                        message=message_data['message'];
                        like=message_data['like'];
                        //End code
                  }
            });
      });
}
getData();

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}