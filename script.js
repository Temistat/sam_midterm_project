// Typewriter effect for the welcome text
let welcomeText = document.getElementById('welcome-text');
let text = "Welcome to Matthew's Mixtape";
let i = 0;

function typeWriter() {
    if (i < text.length) {
        welcomeText.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100); // Adjust typing speed here
    }
}

window.onload = typeWriter;


