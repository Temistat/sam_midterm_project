document.addEventListener("DOMContentLoaded", function() {
    const typewriterElement = document.getElementById("typewriter");
    const enterButton = document.getElementById("enterBtn");

    const text = "Welcome to Matthews Mixtape.";

    function typeWriter(text, i = 0) {
        if (i < text.length) {
            typewriterElement.innerHTML += text.charAt(i);
            setTimeout(() => typeWriter(text, i + 1), 100);
        } else {
            enterButton.style.display = "inline-block";
        }
    }

    typeWriter(text);

    enterButton.addEventListener("click", function() {
        document.getElementById("landing").style.display = "none";
        window.location.href = "menu.html";  // Navigate to the menu page
    });

    // Page transition effect
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('show');
    });

    const showPage = (pageId) => {
        pages.forEach(page => {
            page.classList.remove('show');
        });
        document.getElementById(pageId).classList.add('show');
    }

    // Assuming you call showPage() with the appropriate page ID during navigation
});
