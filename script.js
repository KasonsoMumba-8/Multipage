// Theme toggle functionality
function setupThemeToggle() {
    const themeToggle = document.getElementById("themeToggle");
    if (themeToggle) {
        themeToggle.addEventListener("click", () => {
            document.body.classList.toggle("dark-theme");
            
            // Save preference to localStorage
            const isDark = document.body.classList.contains("dark-theme");
            localStorage.setItem("darkTheme", isDark);
        });

        // Check for saved theme preference on page load
        if (localStorage.getItem("darkTheme") === "true") {
            document.body.classList.add("dark-theme");
        }
    }
}

// Form validation
function setupContactForm() {
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            
            const name = document.getElementById("nameInput").value.trim();
            const message = document.getElementById("messageInput").value.trim();
            
            if (name === "" || message === "") {
                alert("Please fill out all fields.");
            } else {
                document.getElementById("response").innerText = `Thanks, ${name}. We'll get back to you soon!`;
                e.target.reset();
            }
        });
    }
}

// Fetch API integration
function setupUserLoader() {
    const loadUsersBtn = document.getElementById("loadUsersBtn");
    if (loadUsersBtn) {
        loadUsersBtn.addEventListener("click", async () => {
            try {
                const res = await fetch('https://jsonplaceholder.typicode.com/users');
                
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                
                const users = await res.json();
                const userList = document.getElementById("userList");
                
                userList.innerHTML = ""; // Clear previous content
                
                users.forEach(user => {
                    const li = document.createElement("li");
                    li.textContent = user.name;
                    userList.appendChild(li);
                });
            } catch (err) {
                console.error("Failed to load users:", err);
                const userList = document.getElementById("userList");
                if (userList) {
                    userList.innerHTML = "<li>Error loading users. Please try again later.</li>";
                }
            }
        });
    }
}

// FAQ toggle functionality
function setupFAQ() {
    document.querySelectorAll(".question").forEach((q) => {
        q.addEventListener("click", () => {
            q.nextElementSibling.classList.toggle("visible");
        });
    });
}

// Real-time clock
function setupClock() {
    function updateClock() {
        const now = new Date();
        const clockElement = document.getElementById("clock");
        if (clockElement) {
            clockElement.textContent = now.toLocaleTimeString();
        }
    }

    // Update clock every second
    setInterval(updateClock, 1000);

    // Initial call
    updateClock();
}

// Back to top button
function setupBackToTop() {
    const backToTopBtn = document.getElementById("backToTop");

    window.addEventListener("scroll", () => {
        if (window.pageYOffset > 300) {
            backToTopBtn.style.display = "block";
        } else {
            backToTopBtn.style.display = "none";
        }
    });

    if (backToTopBtn) {
        backToTopBtn.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }
}

// Initialize all functionality when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
    setupThemeToggle();
    setupContactForm();
    setupUserLoader();
    setupFAQ();
    setupClock();
    setupBackToTop();
});