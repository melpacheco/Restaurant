function verify() {
    if (document.getElementById("name").value == "") {
        alert("Name is a required field");
    }
    else if (document.getElementById("EmailBold").value == "") {
        alert("Email is a required field");
    }
    else if (document.getElementById("phone").value == "") {
        alert("Phone number is a required field");
    }
    return false;
}