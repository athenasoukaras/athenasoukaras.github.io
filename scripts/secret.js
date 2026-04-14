function secretFunction() {
    var secretVariable = document.getElementById("secrettext").value
    if(secretVariable == "67"){
        document.getElementsByTagName("header")[0].setAttribute("id", "secret");
    }
}