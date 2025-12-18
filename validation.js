function validateForm() {
    let valid = true;

    document.getElementById("nameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("subjectError").innerText = "";
    document.getElementById("messageError").innerText = "";

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let subject = document.getElementById("subject").value.trim();
    let message = document.getElementById("message").value.trim();

    if (name === "") {
      document.getElementById("nameError").innerText = "Name is required";
      valid = false;
    }

    if (email === "") {
      document.getElementById("emailError").innerText = "Email is required";
      valid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      document.getElementById("emailError").innerText = "Invalid email format";
      valid = false;
    }

    if (subject === "") {
      document.getElementById("subjectError").innerText = "Subject is required";
      valid = false;
    }

    if (message === "") {
      document.getElementById("messageError").innerText = "Message is required";
      valid = false;
    }

    if (valid) {
      alert("Message sent successfully!");
    }

    return valid;
  }