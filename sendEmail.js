function takeInput() {
    document.getElementById("myForm").submit();
}

// Attach an event listener to the submit button
document.getElementById("submitBtn").addEventListener("click", function (event) {
    // Prevent the default action of the link (in this case, navigating to #)
    event.preventDefault();
    // Call the function to handle form submission
    takeInput()
})