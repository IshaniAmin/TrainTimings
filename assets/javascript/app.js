
// Initialize Firebase
  var config = {
    apiKey: "AIzaSyCaDSSE_wszpWiAof7MTSthbn89BtGR-K0",
    authDomain: "traintimings-e4ea2.firebaseapp.com",
    databaseURL: "https://traintimings-e4ea2.firebaseio.com",
    storageBucket: "traintimings-e4ea2.appspot.com",
    messagingSenderId: "305858823657"
  };
  firebase.initializeApp(config);


//Initialize Firebase variable
var database = firebase.database();

var trainName = "";
var destination = "";
var frequency = "";
var firstTime = "";
var nextArival = "";
var minAway = "";

$("button").on("click", function() {


    //captures what is typed in form into a variable
	trainName = $("#trainName").val().trim();
	destination = $("#destination").val().trim();
	firstTime = $("#firstTime").val().trim();
	frequency = $("#frequency").val().trim();
	// nextArival = 
	// minAway = 

	console.log(trainName);
	console.log(destination)
	console.log(firstTime);
	console.log(frequency);


	//Pushing code into Database
	database.ref().push({
        trainName: trainName,
        destination: destination,
        firstTime: firstTime,
        frequency: frequency,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
    });

    //clears form
    trainName = $("#trainName").val("");
    destination = $("#destination").val("");
    firstTime = $("#firstTime").val("");
    frequency = $("#frequency").val("");

	return false;

});



database.ref().on("child_added", function(childSnapshot) {

	console.log(childSnapshot.val().trainName);
    console.log(childSnapshot.val().destination);
    console.log(childSnapshot.val().firstTime);
    console.log(childSnapshot.val().frequency);
    console.log(childSnapshot.val().dateAdded);

    $("#table").append("<tr> <td>" + childSnapshot.val().trainName + " </td> <td> " + childSnapshot.val().destination + "</td> <td>" + childSnapshot.val().frequency + " </td> <td> Next Arival </td> <td>Minutes Away </td> </tr>");

    // Handle the errors
    }, function(errorObject) {
      console.log("Errors handled: " + errorObject.code);
    });




