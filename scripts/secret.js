const audio = new Audio('https://codehs.com/uploads/e52e991a877acd826f14132c9950ef4c');

function secretFunction() {
    var secretVariable = document.getElementById("secrettext").value
    if(secretVariable == "67"){
        document.getElementsByTagName("header")[0].setAttribute("id", "secret");
        audio.play();
    }
}