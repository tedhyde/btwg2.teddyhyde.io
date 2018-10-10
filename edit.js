// Initialize Firebase
// TODO: Replace with your project's customized code snippet
var user = undefined;
var original = undefined;

var config = {
    apiKey: "AIzaSyAN9gGLqhY_sgbUMoaTk4zqSJGb7_hm1fE",
    authDomain: "btwg2-c9c3f.firebaseapp.com",
    databaseURL: "https://btwg2-c9c3f.firebaseio.com",
    projectId: "btwg2-c9c3f",
};
firebase.initializeApp(config);

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

// Disable deprecated features
db.settings({
    timestampsInSnapshots: true
});

function addSomeData(data) {
  console.log( "Sending data with: ", user.uid, data );
  db.collection(user.uid).add({ comment: data, original })
    .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
      console.error("Error adding document: ", error);
    });
}

function loginToGithub() {
    var provider = new firebase.auth.GithubAuthProvider();

    firebase.auth().signInWithPopup(provider).then(function(result) {
	// This gives you a GitHub Access Token. You can use it to access the GitHub API.
	var token = result.credential.accessToken;
	// The signed-in user info.
	user = result.user;
	// ...
	console.log( "User: ", user );
	loggedIn();
    }).catch(function(error) {
	// Handle Errors here.
	var errorCode = error.code;
	var errorMessage = error.message;
	// The email of the user's account used.
	var email = error.email;
	// The firebase.auth.AuthCredential type that was used.
	var credential = error.credential;
	// ...
    });
}

function openIt() {
    MicroModal.show('modal-1'); 

}

function openCustomization() {
    MicroModal.show('modal-2'); 
}

function storeIt() {
    MicroModal.close('modal-1');

    var els = document.getElementsByTagName('input');
    let data = undefined;
    for( var index in els ) {
	if( els[index].name == "change" ) {
	    console.log( "Data is: ", els[index].value );
	    data = els[index].value;
	}
    }

    if( data ) {
	addSomeData( data );
    }
}

function showLogin() {
    let els = document.getElementsByClassName("fab-left");
    els[0].style.display = "inline";
    els = document.getElementsByClassName("login");
    els[0].style.display = "inline";
}

function loggedIn() {
    let wrappers = document.getElementsByClassName("loginWrapper");
    wrappers[0].style.display = "none";
    
    const els = document.getElementsByClassName("paragraph");
    for( const index in els ) {
	const el = els[index];
	el.classList.add("dotted");
	el.addEventListener('click', function() {
	    console.log( "Clicked on", el.textContent );
	    document.getElementById("selectedText").innerHTML = original = el.textContent;
	    MicroModal.show('modal-1'); 
	});
    };
}
