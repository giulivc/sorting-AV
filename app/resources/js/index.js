import Config from "./utils/Config.js";
import AnimationController from "./controller/AnimationController.js";
import Questionnaire from "./experiment/Questionnaire.js";
import VisualizationView from "./ui/VisualizationView.js";
import Quiz from "./experiment/Quiz.js";

var currentCondition, firstCondition, secondCondition,
    visualizationView, quiz,
    animationController,
    feedbackArea, feedbackButton;

function init(){

    currentCondition = 1;
    
    let secondPageBtn = document.getElementById("second-page-button"),
        startQuizBtn = document.getElementById("start-quiz-button"),
        startVisualizationBtn = document.getElementById("start-visualization-button");

    feedbackArea = document.getElementById("feedback");
    feedbackButton = document.getElementById("feedback-button");

    secondPageBtn.addEventListener("click", (event) => startQuestionnaire());
    startQuizBtn.addEventListener("click", (event) => startQuiz());
    startVisualizationBtn.addEventListener("click", (event) => initCondition());

}

function getExperimentConditions(){

    var request = new XMLHttpRequest();
    request.onreadystatechange = function() { 

        if (request.readyState == 4 && request.status == 200){
            /*var conditions = JSON.parse(request.responseText).conditions; 
        
            firstCondition = conditions[0];
            secondCondition = conditions[1];*/
        } 
            
    }
    request.open("GET", "https://algorithms.software-engineering.education/api/experiments/random" , true); 
    request.send(null);

    //example
    var conditions = {
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
     }.conditions;
    
    firstCondition = conditions[0];
    secondCondition = conditions[1];


}

function stringifyAlgorithm(algorithm){
    switch(algorithm){
        case Config.BUBBLESORT: 
            return "BubbleSort";
        case Config.INSERTIONSORT: 
            return "InsertionSort";
        case Config.SELECTIONSORT: 
            return "SelectionSort";
        default: 
            return;
    }
}

function startQuestionnaire(){
    document.getElementById("introduction-text").style.display = "none";
    document.getElementById("survey").style.display = "block";

    var questionnaire = new Questionnaire();
    questionnaire.addOnCompleteListener(processQuestionnaireData);
}


function processQuestionnaireData(sender) {
    var resultAsString = JSON.stringify(sender.data);

    console.log(resultAsString); //new ExperimentResult Object 

    getExperimentConditions();

    document.getElementById("survey").innerHTML = "";
    document.getElementById("task-description").style.display = "block";
    document.querySelector("#task-description #algorithm").innerHTML = stringifyAlgorithm(firstCondition.algorithm);

}

function startQuiz(){

    animationController.reset();

    document.getElementById("visualization").style.display = "none";
    document.getElementById("survey").style.display = "block";

    quiz = new Quiz(visualizationView.getAlgorithm());
    quiz.addOnCompleteListener(processQuizData);
}

function processQuizData(sender) {
    var resultAsString = JSON.stringify(sender.data);

    console.log(resultAsString); //new ExperimentResult Object 

    document.getElementById("survey").innerHTML = "";

    if(currentCondition == 1){
        document.getElementById("task-description").style.display = "block";
        document.querySelector("#task-description #algorithm").innerHTML = stringifyAlgorithm(secondCondition.algorithm);
    } else {
        document.getElementById("last-page").style.display = "block";
        feedbackButton.addEventListener("click", (event) => saveFeedback());
    }

    currentCondition++;

}


function initCondition(){

    if(currentCondition == 1){
        var condition = firstCondition;
    } else {
        var condition = secondCondition;
    }

    document.getElementById("task-description").style.display = "none";
    document.getElementById("visualization").style.display = "block";

    visualizationView = new VisualizationView(condition);

    visualizationView.setAlgorithmTitle(stringifyAlgorithm(condition.algorithm));
    visualizationView.setPseudoCode();
    visualizationView.displayModeParameter();

    initListener(condition);

}


function initListener(condition){

    animationController = new AnimationController(condition);

    if(condition.mode == Config.MODE_BASELINE){

        let startButton = document.querySelector("#base-controller #start-button"),
            pauseButton = document.querySelector("#base-controller #pause-button"),
            resetButton = document.querySelector("#base-controller #reset-button");

        startButton.addEventListener("click", (event) => animationController.play());
        pauseButton.addEventListener("click", (event) => animationController.pause());
        resetButton.addEventListener("click", (event) => animationController.reset());

    }

    if(condition.mode === Config.MODE_STEPTHROUGH){

        let startButton = document.querySelector("#step-controller #start-button"),
            pauseButton = document.querySelector("#step-controller #pause-button"),
            resetButton = document.querySelector("#step-controller #reset-button"),
            skipToEndBtn = document.getElementById("skip-to-end-button"),
            backwardBtn = document.getElementById("backward-button"),
            forwardBtn = document.getElementById("forward-button");


        startButton.addEventListener("click", (event) => animationController.play());
        pauseButton.addEventListener("click", (event) => animationController.pause());
        resetButton.addEventListener("click", (event) => animationController.reset());
        skipToEndBtn.addEventListener("click", (event) => animationController.skipToEnd());
        backwardBtn.addEventListener("click", (event) => animationController.stepBackward());
        forwardBtn.addEventListener("click", (event) => animationController.stepForward());
    }
    
    
}

function saveFeedback(){
    var feedback = feedbackArea.value;

    feedbackArea.readOnly = "true";

    feedbackButton.innerHTML = "Gesendet";
    feedbackButton.style.color = Config.MAIN_GREEN;
    feedbackButton.style.pointerEvents = "none";

    console.log(feedback); // TO DO
}



init();