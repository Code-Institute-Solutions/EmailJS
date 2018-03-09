function sendMail(contactForm) {
    var contactName = contactForm.name.value;
    var contactEmail = contactForm.emailaddress.value;
    var contactRequest = contactForm.projectsummary.value;
    var formMessageElem = document.getElementById('form-message');

    emailjs.send("gmail", "rosie", {
            "from_name": contactName,
            "from_email": contactEmail,
            "project_request": contactRequest
        })
        .then(
            function(response) {
                // Show success alert to user
                formMessageElem.innerHTML =
                    `Thank you ${contactName}, I'll be in touch soon, have a great day`;
                formMessageElem.classList.add("alert-success");

                contactForm.reset();
            },
            function(error) {
                // Show error alert to user
                formMessageElem.innerHTML =
                    `Sorry, we seem to have a technical difficulty, please try again later.`;
                formMessageElem.classList.add("alert-danger");

                // Show full error object in console
                console.error("Error received from emailJS:", JSON.parse(error.text));
            }
        );

    return false;  // To block from loading a new page
}
