// Firebase Authentication instance
const auth = firebase.auth();

// Login with Email/Password
function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  auth.signInWithEmailAndPassword(email, password)
    .then(userCredential => {
      alert("Logged in!");
      window.location.href = "http://localhost:8000/home";  // Redirect to the main notes page
    })
    .catch(error => {
      alert(error.message);  // Show error message if login fails
    });
}

// Signup with Email/Password
function signup() {
  const email = document.getElementById('signupEmail').value;
  const password = document.getElementById('signupPassword').value;

  auth.createUserWithEmailAndPassword(email, password)
    .then(userCredential => {
      alert("Account created!");
      window.location.href = "http://localhost:8000/home";  // Redirect to the main notes page
    })
    .catch(error => {
      alert(error.message);  // Show error message if signup fails
    });
}

// Login with Google
function googleLogin() {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider)
    .then(result => {
      alert("Logged in with Google!");
      window.location.href = "http://localhost:8000/home";  // Redirect to the main notes page
    })
    .catch(error => {
      alert(error.message);  // Show error message if Google login fails
    });
}
