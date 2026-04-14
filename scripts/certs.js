var index = 0;
var certs = ["Certifications/CIW-Athena.pdf","Certifications/CompTIAcert.pdf","Certifications/computationalthinking.pdf","Certifications/Cybersecurity.pdf","Certifications/Data Analytics.pdf","Certifications/HTML5appdev.pdf","Certifications/HTMLCSS.pdf","Certifications/javascript.pdf","Certifications/myOSHAcert.pdf","Certifications/Network Security.pdf","Certifications/python.pdf"];
var certDesc =["This certification is based on HTML, CSS, JavaScript, XML, and other web development-related skills.", "This certification is achieved by understanding technology fundamentals, such as basic hardware components. ", "Computational thinking is a thought process where a user can format problems in a way that can be solved in computational steps. This includes pattern recognition, abstraction, and algorithmic thinking.", "This certification is obtained by understanding important cybersecurity concepts, such as the CIA triad, BCP, and different types of defense techniques.", "This certification is based on the ability to read, understand, and analyze data, and create conclusions based on information given.", "This certification includes HTML5 concepts and best practices, CSS materials, and JavaScript frameworks.", "This certification covers basic HTML and CSS skills.", "This certification is based on JavaScript fundamentals, and using JavaScript to create responsive layouts.", "This certification follows a 10-hour course which covers basic safety practices and hazards in the workplace. ", "Similarly to cybersecurity, this certification covers important network safety materials, such as the CIA triad and different types of malware and hacks. ", "This certification covers the fundamentals for the Python programming language."]

function addB() {
    index ++  ;
    changeWork();
}
function subtractB() {
    index -- ;
    changeWork();
}
function changeWork() {
    if(index == certs.length) {
        index = 0;
    } else if(index < 0) {
        index = certs.length - 1;
    }
    console.log(index)
    document.getElementsByTagName("iframe")[0].setAttribute("src", certs[index]);
    document.getElementById("certDesc").innerHTML = certDesc[index];
}