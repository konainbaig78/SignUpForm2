document.addEventListener("DOMContentLoaded", function() {
    let user = JSON.parse(localStorage.getItem("users")) || []; // consistent key

    let signUp = document.getElementById("signUp");
    if (signUp) {
        signUp.addEventListener("click", function(event) {
            event.preventDefault();

            let userName = document.getElementById("userName");
            let fName = document.getElementById("fName");
            let email = document.getElementById("email");
            let pNum = document.getElementById("pNum");
            let pass = document.getElementById("pass");

            let userData = {
                userName: userName.value,
                fName: fName.value,
                email: email.value,
                pNum: pNum.value,
                pass: pass.value
            };

            user.push(userData);

            // Clear input fields correctly
            userName.value = "";
            fName.value = "";
            email.value = "";
            pNum.value = "";
            pass.value = "";

            // Save user data to localStorage
            localStorage.setItem("users", JSON.stringify(user));

            // Navigate to login.html after sign-up
            window.location.href = "login.html";
        });
    }

    let login = document.getElementById("signIn");
    if (login) {
        login.addEventListener("click", function() {
            // Navigate to login.html for sign-in
            window.location.href = "login.html";
        });
    }

    let sign2Up = document.getElementById("sign2Up");
    if (sign2Up) {
        sign2Up.addEventListener("click", function() {
            // Navigate back to index.html from login page
            window.location.href = "index.html";
        });
    } 

    let sign2In = document.getElementById("sign2In"); // Fixed typo
    if (sign2In) {
        sign2In.addEventListener("click", function(event) {
            event.preventDefault();
            let email2 = document.getElementById("email2");
            let pass2 = document.getElementById("pass2");

            let storedUsers = JSON.parse(localStorage.getItem("users")) || []; // Correct key 'users'

            let findUser = storedUsers.find(function(user) {
                // Compare the values of email and password
                return user.email === email2.value && user.pass === pass2.value;
            });

            if (findUser) {
                alert("Login Successful!");
            } else {
                alert("Login failed: Incorrect email or password.");
            }
        });
    }
});
