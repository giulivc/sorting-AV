import AppManager from "./AppManager.js";

var feedbackArea, feedbackButton;

function init(){

    var application = new AppManager(getExperiment());
    
    let secondPageBtn = document.getElementById("second-page-button"),
        startQuizBtn = document.getElementById("start-quiz-button"),
        startVisualizationBtn = document.getElementById("start-visualization-button");

    feedbackArea = document.getElementById("feedback");
    feedbackButton = document.getElementById("feedback-button");

    secondPageBtn.addEventListener("click", (event) => application.startQuestionnaire());
    startQuizBtn.addEventListener("click", (event) => application.startQuiz());
    startVisualizationBtn.addEventListener("click", (event) => application.initCondition());
    feedbackButton.addEventListener("click", (event) => saveFeedback());

}

function getExperiment(){

    var request = new XMLHttpRequest();
    request.onreadystatechange = function() { 

        if (request.readyState == 4 && request.status == 200){
            var experiment = JSON.parse(request.responseText);
            //experiment.currentParticipant = uuidv4();
        } 
            
    }
    request.open("GET", "https://algorithms.software-engineering.education/api/experiments/random" , true); 
    request.send();

    /*example
    var experiment = `{ 
        "id":"1234567890",
        "state":"open",
        "startedAt": null,
        "conditions":[
           {
              "mode":"base",
              "algorithm":"bubble-sort"
           },
           {
              "mode":"step-through",
              "algorithm":"insertion-sort"
           }
        ],
        "currentParticipant": null,
        "results":{
           "data": null
        }
     }`;*/
    
    return experiment;

}


function saveFeedback(){
    var feedback = feedbackArea.value;

    feedbackArea.readOnly = "true";
    feedbackButton.innerHTML = "Gesendet";
    feedbackButton.style.pointerEvents = "none";
    feedbackButton.style.color = Config.MAIN_GREEN;

    console.log(feedback); // TO DO
}



init();