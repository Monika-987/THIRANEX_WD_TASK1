
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const status = document.getElementById("formStatus");

        if (name === "") {
            status.textContent = "Please enter your name.";
            return;
        }

        status.textContent = "Thank you, " + name + "! Your form was validated successfully.";
        contactForm.reset();
    });
}
