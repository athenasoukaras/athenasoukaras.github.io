
var projects = ['<iframe width="392" height="620" style="border: 0px;" src="https://studio.code.org/projects/applab/NIETT1qj-1N29-2z96-9N1j-IN16v26F12NO/embed?nosource"></iframe>', '<iframe src="https://afterthebell.github.io" title="After The Bell Website"></iframe>', '<iframe width="392" height="620" style="border: 0px;" src="https://studio.code.org/projects/applab/68vbjOOO-v16j-2Ov8-zFqb-Tbq6OOT6v8IO/embed?nosource"></iframe>', '<iframe width="392" height="620" style="border: 0px;" src="https://studio.code.org/projects/applab/6T8jzbTI-IIF8-2OFT-9T2b-Fv81TvTjjF61/embed?nosource"></iframe>']
//<iframe src="https://afterthebell.github.io" title="After The Bell Website"></iframe>
var descriptions = ["This app was created for our final hackathon! Me and my partner, Annalisa, decided to create a dress-up app for our project!", "One of our first projects for Mr. King's class was the game project! Me and Jayna created <a href='https://afterthebell.github.io' target='_blank'>After The Bell</a> for the project, which was centered around the topic of bullying!","This project was created for AP Computer Science Principles! We had to use three variables and if-statements to create a decision-maker app.", "This was one of the first projects for Computer Science Principles! Me and Nyson created an app to inform the user about the mobile rhythm game, Project Sekai:Colorful Stage."];
var index = 0;

function addB() {
    index ++  ;
    changeWork();
}
function subtractB() {
    index -- ;
    changeWork();
}
function changeWork() {
    if(index == projects.length) {
        index = 0;
    } else if(index < 0) {
        index = projects.length - 1;
    }
    console.log(index)
    document.getElementById("caro").innerHTML = projects[index];
    document.getElementById("workdesc").innerHTML = descriptions[index];
}