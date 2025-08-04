document.getElementById("registerForm")?.addEventListener("submit", function(event){
    event.preventDefault();

    let firstName = document.getElementById("regFirstName").value;
    let lastName = document.getElementById("regLastName").value;
    let email = document.getElementById("regEmail").value.toLowerCase();
    let password = document.getElementById("regPassword").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
   
    // const errorDiv = document.querySelector('.error-message');
    // let message = '';
    // errorDiv.textContent = message;

    if (localStorage.getItem(email)) {
        alert("You already have an account with this email.");
        return;
    }

    if (password !== confirmPassword){
        alert('Passwords do not match')
        return;
    }

    const user = {
        firstname: firstName,
        lastname: lastName,
        email: email,
        password: password
    }

    localStorage.setItem(email, JSON.stringify(user));
    alert("Registration is successful! Please login.");
    window.location.href = "login.html";
    
});

 document.getElementById("loginForm")?.addEventListener("submit", function(event){
    event.preventDefault();

    let userName = document.getElementById("userEmail").value.toLowerCase();
    let password = document.getElementById("userPassword").value;

    let registerdUser = localStorage.getItem(userName)

    if (registerdUser) {

        let parsedRegisterdUser = JSON.parse(registerdUser);

        if (parsedRegisterdUser.password === password && parsedRegisterdUser.email === userName) {
            localStorage.setItem("loggedInUser", JSON.stringify(parsedRegisterdUser));
            alert(`Welcome Back! ${parsedRegisterdUser.firstname}`)
            window.location.href = "index.html"
        } else{
            alert("Incorrect password or email")
        }
         
    }else{
        alert("Account not found");
    }
 });


document.getElementById("forgotPasswordForm")?.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("regUserEmail").value.trim().toLowerCase();
    const newPassword = document.getElementById("newPassword").value;
    const confirmPassword = document.getElementById("confirmNewPassword").value;

    // Validate password match
    if (newPassword !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    // Check if user is already registered
    const existingUser = localStorage.getItem(email);

    if (existingUser) {
        const parsedUser = JSON.parse(existingUser);
        parsedUser.password = newPassword;

        localStorage.setItem(email, JSON.stringify(parsedUser));
        alert("Password has been successfully updated. Please login with your new password.");
        window.location.href = "login.html";
    } else {
        alert("This email is not registered.");
    }
});

const passwordInputs = document.querySelectorAll('.passwordInput');
const togglePasswords = document.querySelectorAll('.togglePassword');

togglePasswords.forEach((toggleBtn, index) => {
  toggleBtn.addEventListener('click', function () {
    const input = passwordInputs[index];

    if (input.type === 'password') {
      input.type = 'text';
      toggleBtn.innerHTML = '<i class="far fa-eye-slash"></i>';
    } else {
      input.type = 'password';
      toggleBtn.innerHTML = '<i class="far fa-eye"></i>';
    }
  });
});