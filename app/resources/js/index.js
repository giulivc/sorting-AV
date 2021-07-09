/* eslint-disable no-unused-vars */

import AppManager from "./AppManager.js";

function init(){

    var request = new XMLHttpRequest();

    request.onreadystatechange = function() { 
        if (request.readyState === 4 && request.status === 200){ 
            let experiment = JSON.parse(request.responseText);
            experiment.currentParticipant = uuidv4();

            var application = new AppManager(experiment);

            let secondPageBtn = document.getElementById("second-page-button"),
            startQuizBtn = document.getElementById("start-quiz-button"),
            startVisualizationBtn = document.getElementById("start-visualization-button"),
            feedbackButton = document.getElementById("feedback-button");
    
            secondPageBtn.addEventListener("click", (event) => application.startQuestionnaire());
            startQuizBtn.addEventListener("click", (event) => application.startQuiz());
            startVisualizationBtn.addEventListener("click", (event) => application.initCondition());
            feedbackButton.addEventListener("click", (event) => application.onFeedbackSend());
        } 
    };

    request.open("GET", "/api/experiments/random" , true); 
    request.send();

}

//source: https://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid
function uuidv4() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c === "x" ? r : (r & 0x3 | 0x8);
    return v.toString(16);
    });
}

init();