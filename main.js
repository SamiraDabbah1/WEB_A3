
function redirectToProfile() {
    // Redirect to profile.html
    window.location.href = 'profile.html';
}

// Function to handle login form submission
function handleLoginSubmit(form) {
    // Prevent duplicate form submission
    form.querySelector('button[type="submit"]').disabled = true;

    // Get the selected user type
    const userType = form.querySelector('#userType').value;

    // Redirect based on the selected user type
    if (userType === 'lecturer') {
        // Redirect to lecturer page
        window.location.href = 'LecturerHome.html';
    } else if (userType === 'student') {
        // Redirect to student page
        window.location.href = 'StudentHome.html';
    }

    // Return false to prevent the form from submitting (since we're redirecting manually)
    return false;
}

// Function to handle register form submission
function handleRegisterSubmit(form) {
    // Prevent duplicate form submission
    form.querySelector('button[type="submit"]').disabled = true;
    // You can also return false to prevent form submission in certain cases
    const userType = form.querySelector('#role').value;

    // Redirect based on the selected user type
    if (userType === 'lecturer') {
        // Redirect to lecturer page
        window.location.href = 'LecturerHome.html';
    } else if (userType === 'student') {
        // Redirect to student page
        window.location.href = 'StudentHome.html';
    }

    // Return false to prevent the form from submitting (since we're redirecting manually)
    return false;
}

document.addEventListener("DOMContentLoaded", function () {
    // Get the dark mode toggle button
    const darkModeToggle = document.getElementById('toggle-btn');
    const body = document.body;

    // Add event listener to dark mode toggle button
    darkModeToggle.addEventListener('click', () => {
        // Toggle between light and dark themes
        if (body.classList.contains('theme-dark')) {
            body.classList.remove('theme-dark');
            body.classList.add('theme-light');
            body.style.backgroundColor = '';
            body.style.color = '';
        } else {
            body.classList.remove('theme-light');
            body.classList.add('theme-dark');
            body.style.backgroundColor = '#1A202C';
            body.style.color = 'blue';
        }

        // Toggle the icon between moon and sun
        const icon = darkModeToggle.querySelector('i');
        if (icon.classList.contains('fa-moon')) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    });
 



    document.addEventListener("DOMContentLoaded", function () {
        // Check if we are on the login page
        const loginForm = document.getElementById('loginForm');
        if (loginForm) {
            // Add event listener to the login form
            loginForm.addEventListener('submit', function (event) {
                // Prevent the form from submitting normally
                event.preventDefault();

                // Call the handleLoginSubmit function with the form as argument
                handleLoginSubmit(loginForm);
            });
        }

        // Check if we are on the register page
        const registerForm = document.getElementById('registerForm');
        if (registerForm) {
            // Add event listener to the register form
            registerForm.addEventListener('submit', function (event) {
                // Prevent the form from submitting normally
                event.preventDefault();

                // Call the handleRegisterSubmit function with the form as argument
                handleRegisterSubmit(registerForm);
            });
        }
    });

});
