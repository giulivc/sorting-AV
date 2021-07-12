/* eslint-disable no-unused-vars */
import Config from "./utils/Config.js";
import Questionnaire from "./experiment/Questionnaire.js";
import VisualizationView from "./ui/VisualizationView.js";
import Quiz from "./experiment/Quiz.js";
import AnimationController from "./controller/AnimationController.js";
import ExperimentResult from "./experiment/ExperimentResult.js";

var firstPage, 
    surveyDiv, visualizationDiv, instructionDiv,
    lastPage,
    firstCondition, secondCondition,
    experimentResult,
    visualizationView, quiz,
    animationController,
    self;

class AppManager {

    constructor(experiment){

        this.currentCondition = 1;
        this.experiment = experiment;

        self = this;
        
        firstCondition = this.experiment.conditions[0];
        secondCondition = this.experiment.conditions[1];

        firstPage = document.getElementById("introduction-text");
        surveyDiv = document.getElementById("survey");
        visualizationDiv = document.getElementById("visualization");
        instructionDiv = document.getElementById("instruction");
        lastPage = document.getElementById("last-page");

        experimentResult = new ExperimentResult(this.experiment.startedAt);
        
    }

    startQuestionnaire(){
    
        var questionnaire = new Questionnaire();
        questionnaire.addOnCompleteListener(this.processQuestionnaireData);

        firstPage.style.display = "none";
        surveyDiv.style.display = "block";

        experimentResult.addTimestamp("questionnaireStarted", Date.now());

    }

    processQuestionnaireData(sender) {
        var questionnaireData = sender.data;
    
        experimentResult.saveQuestionnaireData(questionnaireData);
    
        surveyDiv.innerHTML = "";
        instructionDiv.style.display = "block";
        instructionDiv.querySelector("#algorithm").innerHTML = self.stringifyAlgorithm(firstCondition.algorithm);
    
    }

    stringifyAlgorithm(algorithm){

        switch(algorithm){
            case Config.BUBBLESORT: 
                return "BubbleSort";
            case Config.INSERTIONSORT: 
                return "InsertionSort";
            case Config.SELECTIONSORT: 
                return "SelectionSort";
            default: 
                return "";
        }
    }

    startQuiz(){

        animationController.reset();
    
        visualizationDiv.style.display = "none";
        surveyDiv.style.display = "block";
    
        quiz = new Quiz(visualizationView.getAlgorithm());
        quiz.addOnCompleteListener(this.processQuizData);

        if(this.currentCondition === 1){
            experimentResult.addTimestamp("firstQuizStarted", Date.now());
        } else {
            experimentResult.addTimestamp("secondQuizStarted", Date.now());
        }
        
    }

    processQuizData(sender) {

        var quizData = sender.data;
    
        surveyDiv.innerHTML = "";
    
        if(self.currentCondition === 1){
    
            experimentResult.saveQuizData(firstCondition.algorithm, quizData);
            experimentResult.addTimestamp("firstQuizCompleted", Date.now());
    
            instructionDiv.style.display = "block";
            instructionDiv.querySelector("#algorithm").innerHTML = self.stringifyAlgorithm(secondCondition.algorithm);

        } else {
    
            experimentResult.saveQuizData(secondCondition.algorithm, quizData);
            experimentResult.addTimestamp("secondQuizCompleted", Date.now());

            lastPage.style.display = "block";
    
            self.experiment.results = experimentResult;
            self.closeExperiment();
            self.experiment.state = "closed";
    
        }
    
        self.currentCondition++;
    }

    onFeedbackSend(){

        let feedbackArea = document.getElementById("feedback"),
            feedbackButton = document.getElementById("feedback-button"),
            feedback = feedbackArea.value;

        feedbackArea.readOnly = "true";
        feedbackButton.innerHTML = "Gesendet";
        feedbackButton.style.pointerEvents = "none";
        feedbackButton.style.color = Config.MAIN_GREEN;

        experimentResult.saveFeedback(feedback);

        self.updateExperiment();
        
    }

    initCondition(){

        var condition;

        if(this.currentCondition === 1){

            condition = firstCondition;
            experimentResult.addTimestamp("firstConditionStarted", Date.now());

        } else {
            condition = secondCondition;
            experimentResult.addTimestamp("secondConditionStarted", Date.now());
        }
    
        instructionDiv.style.display = "none";
        visualizationDiv.style.display = "block";
    
        visualizationView = new VisualizationView(condition);
    
        visualizationView.setAlgorithmTitle(this.stringifyAlgorithm(condition.algorithm));
        visualizationView.setPseudoCode();
        visualizationView.displayModeParameter();
    
        this.initListener(condition);
    
    }

    initListener(condition){

        animationController = new AnimationController(condition);
    
        if(condition.mode === Config.MODE_BASELINE){
    
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

    closeExperiment(){
        var request = new XMLHttpRequest();

        request.onreadystatechange = function() {
            if (request.readyState === 4 && request.status === 200){
                console.log(request.responseText);
            } 
               
        }
        
        request.open("POST", `/api/experiment/${this.experiment.id}/close`, true); 
        request.setRequestHeader("Content-type", "application/json");
        request.send(JSON.stringify(this.experiment));
      
    }

    updateExperiment(){
        var request = new XMLHttpRequest();
        
        request.onreadystatechange = function() { 
            if (request.readyState === 4 && request.status === 200){
                console.log(request.responseText);
            } 
               
        };

        request.open("POST", `/api/experiment/${this.experiment.id}/append`, true); 
        request.setRequestHeader("Content-type", "application/json");
        request.send(JSON.stringify(this.experiment));
    }

}


export default AppManager;