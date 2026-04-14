var homeSlide = 0;
function checkSlide() { 
    homeSlide ++
    if (homeSlide == 3) {
        homeSlide = 0;
    }
}

function yeahYeah() {
    if(homeSlide == 0) {
        console.log("hi!");
        document.getElementsByTagName("caro")[0].setAttribute("id", "img1");
    } else if(homeSlide == 2) {
        document.getElementsByTagName("caro")[0].setAttribute("id", "img3");
    }else if(homeSlide == 1) {
        document.getElementsByTagName("caro")[0].setAttribute("id", "img2");
    }
}

setInterval(function() {
    checkSlide()
    document.getElementById("homeCaroDesc").innerHTML = (homeSlide + 1) + " / 3";
    //console.log(homeSlide);
    yeahYeah();
}, 3000)