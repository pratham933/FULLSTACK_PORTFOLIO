const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {

        themeToggle.innerHTML = "☀️ Light";
        themeToggle.style.backgroundColor = "#333";
        themeToggle.style.color = "white";

    } else {

        themeToggle.innerHTML = "🌙 Dark";
        themeToggle.style.backgroundColor = "#f0f0f0";
        themeToggle.style.color = "black";

    }

});