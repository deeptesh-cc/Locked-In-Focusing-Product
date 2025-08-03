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