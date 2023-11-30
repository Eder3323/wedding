function showSuccessMessage() {
    setTimeout(function(){
        var successMessageDiv = document.getElementById("span_text_saved");
        successMessageDiv.style.display = "block"; // Set the display property to "block"
        var successMessageDiv = document.getElementById("name-input");
        successMessageDiv.value = ""; // Set the display property to "block"
        var successMessageDiv = document.getElementById("guest-input");
        successMessageDiv.value = 1; // Set the display property to "block"
        var successMessageDiv = document.getElementById("message-input");
        successMessageDiv.value = ""; // Set the display property to "block"
    },1000);


}