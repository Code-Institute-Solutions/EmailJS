function sendMail(contactForm) {
    emailjs.send("gmail", "rosie", {
            "from_name": contactForm.name.value,
            "from_email": contactForm.emailaddress.value,
            "project_request": contactForm.projectsummary.value
        })
        .then(
            function (response) {
                console.log("SUCCESS", response);
                // If email is sent, display success message
                document.getElementById("contactForm").reset();
                $(".success").html("Form submitted successfully!").addClass("alert-success");
            },
            function (error) {
                console.log("FAILED", error);
                // If email is sent, display failed message
                $(".success").html("Form could not be submitted!").addClass("alert-danger");
            },
        );
    return false; // To block from loading a new page
}