document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username === "admin" && password === "password") {
      document.getElementById('message').textContent = "Login successful!";
      document.getElementById('message').style.color = "lightgreen";
    } else {
      document.getElementById('message').textContent = "Incorrect username or password.";
      document.getElementById('message').style.color = "red";
    }
  });
  