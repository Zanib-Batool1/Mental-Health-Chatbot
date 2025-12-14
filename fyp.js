// ===== LOGIN CREDENTIALS =====
const correctUsername = "Zanib";
const correctPassword = "1234";

let loggedInUser = "";

// ===== LOGIN FUNCTION =====
function login() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;

  if (username === "" || password === "") {
    alert("Please enter both username and password");
    return;
  }

  if (username !== correctUsername || password !== correctPassword) {
    alert("Invalid username or password");
    return;
  }

  loggedInUser = username;

  // Hide login and show chat
  document.getElementById("login-container").style.display = "none";
  document.getElementById("chat-container").style.display = "block";

  // Welcome message
  document.getElementById("welcome-msg").innerHTML =
    "Welcome " + loggedInUser + "<br>Let's start chatting 😊";
}

// ===== CHAT FUNCTION =====
function sendMessage() {
  const userInput = document.getElementById("user-input");
  const message = userInput.value.trim();

  if (message === "") return;

  const chatBox = document.getElementById("chat-box");

  // Add user message
  chatBox.innerHTML += `<p><b>${loggedInUser}:</b> ${message}</p>`;

  // Simple bot reply
  chatBox.innerHTML += `<p><b>Bot:</b> I’m here to listen. Tell me more.</p>`;

  userInput.value = "";

  // Auto scroll to bottom
  chatBox.scrollTop = chatBox.scrollHeight;
}
