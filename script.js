document.addEventListener('DOMContentLoaded', () => {
    // Dark Mode Toggle Script
    const darkModeToggle = document.getElementById("darkModeToggle");
    const darkModeIcon = document.getElementById("darkModeIcon");
    const bodyElement = document.body;

    // Load saved theme
    const savedTheme = localStorage.getItem("theme") || "light";
    bodyElement.setAttribute("data-bs-theme", savedTheme);
    updateIcon(savedTheme);

    if (darkModeToggle) {
    darkModeToggle.addEventListener("click", () => {
        const currentTheme = bodyElement.getAttribute("data-bs-theme");
        const newTheme = currentTheme === "light" ? "dark" : "light";

        bodyElement.setAttribute("data-bs-theme", newTheme);
        localStorage.setItem("theme", newTheme);
        updateIcon(newTheme);

        // ✅ Force chart to redraw so text color updates
        if (window.myCharttasks) {
            window.myCharttasks.update();
        }
    });
}


    function updateIcon(theme) {
        if (darkModeIcon) {
            darkModeIcon.className = theme === "dark" ? "bi bi-sun-fill" : "bi bi-moon-stars-fill";
        }
    }

    // Form Validation
    const forms = document.querySelectorAll('.needs-validation');

    Array.from(forms).forEach((form) => {
        form.addEventListener('submit', (event) => {
            const pass = document.getElementById('newPassword');
            const confirm = document.getElementById('confirmPassword');

            if (pass && confirm && pass.value !== confirm.value) {
                confirm.setCustomValidity('Passwords do not match');
            } else if (confirm) {
                confirm.setCustomValidity('');
            }

            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }

            form.classList.add('was-validated');
        }, false);
    });
});