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

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    // Apna WhatsApp number yaha likho
    const phone = "918839144701";

    const whatsappMessage =
        `Hello Pratham,%0A%0A` +
        `Name: ${name}%0A` +
        `Email: ${email}%0A` +
        `Subject: ${subject}%0A%0A` +
        `Message:%0A${message}`;

    const whatsappURL =
        `https://wa.me/${phone}?text=${whatsappMessage}`;

    window.open(whatsappURL, "_blank");

    contactForm.reset();

});