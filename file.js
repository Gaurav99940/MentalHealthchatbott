document.addEventListener('DOMContentLoaded', function() {
    // Get buttons
    const loginBtn = document.getElementById('loginBtn');
    const registerBtn = document.getElementById('registerBtn');

    // Add click event listeners
    loginBtn.addEventListener('click', function() {
        window.location.href = 'login.html';
    });

    registerBtn.addEventListener('click', function() {
        window.location.href = 'register.html';
    });

    // Animation for buttons on hover
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
            this.style.boxShadow = '0 10px 20px rgba(108, 99, 255, 0.2)';
        });

        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });
});