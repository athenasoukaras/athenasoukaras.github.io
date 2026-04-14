console.log("Hello World!");
var isHidden = true;
function navigation() {
    // navigation bar code >-<
    if (isHidden) {
        isHidden = false;
        document.getElementsByTagName("ul")[0].setAttribute("id", "show");
    } else {
        isHidden = true;
        document.getElementsByTagName("ul")[0].setAttribute("id", "hide");
    }
}