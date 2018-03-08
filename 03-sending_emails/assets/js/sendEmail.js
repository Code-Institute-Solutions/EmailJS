function sendMail(contactForm) {
    emailjs.send("gmail", "rosie", {
            "from_name": contactForm.name.value,
            "from_email": contactForm.emailaddress.value,
            "project_request": contactForm.projectsummary.value
        })
        .then(
            function (response) {
                console.log("SUCCESS", response);
            },
            function (error) {
                console.log("FAILED", error);
            },
        );
    return false; // To block from loading a new page
}

// Reset form after submit
function resetForm() {
    document.getElementById("contactForm").reset();
    // hide form fields
    $("#fullname, #emailaddress, #projectsummary").hide();
    // prevent button from being clicked again
    $("button[type=submit]").prop("disabled", true);
    // hide the form title
    $("#contactFormTitle").hide();
    // display form success message
    $("#submitButton").html("Form submitted successfully!").css('background-color', 'green');
}