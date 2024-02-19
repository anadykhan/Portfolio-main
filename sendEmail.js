function takeInput() {
    document.getElementById("myForm").submit();
}

// Attach an event listener to the submit button
document.getElementById("submitBtn").addEventListener("click", function (event) {
    event.preventDefault();
    takeInput()
})