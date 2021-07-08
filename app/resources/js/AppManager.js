import Config from "./utils/Config.js";
import Questionnaire from "./experiment/Questionnaire.js";
import VisualizationView from "./ui/VisualizationView.js";
import Quiz from "./experiment/Quiz.js";
import AnimationController from "./controller/AnimationController.js";
import ExperimentResult from "./experiment/ExperimentResult.js";

var firstPage, 
    surveyDiv, visualizationDiv, instructionDiv,
    lastPage;

var firstCondition, secondCondition,
    experimentResult,
    visualizationView, quiz,
    animationController;

var self;


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

        experimentResult = new ExperimentResult();
        
    }

    startQuestionnaire(){

        firstPage.style.display = "none";
        surveyDiv.style.display = "block";
    
        var questionnaire = new Questionnaire();
        questionnaire.addOnCompleteListener(this.processQuestionnaireData);

        experimentResult.addTimestamp("questionnaireStarted", new Date().toISOString());

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
                return;
        }
    }


    startQuiz(){

        animationController.reset();
    
        visualizationDiv.style.display = "none";
        surveyDiv.style.display = "block";
    
        quiz = new Quiz(visualizationView.getAlgorithm());
        quiz.addOnCompleteListener(this.processQuizData);

        if(this.currentCondition == 1){
            experimentResult.addTimestamp("firstQuizStarted", new Date().toISOString());
        } else {
            experimentResult.addTimestamp("secondQuizStarted", new Date().toISOString());
        }
        
    }

    processQuizData(sender) {

        var quizData = sender.data;
    
        surveyDiv.innerHTML = "";
    
        if(self.currentCondition == 1){
    
            experimentResult.saveQuizData(firstCondition.algorithm, quizData);
            experimentResult.addTimestamp("firstQuizCompleted", new Date().toISOString());
    
            instructionDiv.style.display = "block";
            instructionDiv.querySelector("#algorithm").innerHTML = self.stringifyAlgorithm(secondCondition.algorithm);

        } else {
    
            experimentResult.saveQuizData(secondCondition.algorithm, quizData);
            experimentResult.addTimestamp("secondQuizCompleted", new Date().toISOString());

    
            lastPage.style.display = "block";
    
            self.experiment.results = experimentResult;
    
            console.log(self.experiment);

            //self.closeExperiment();
    
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
        
        console.log(this.experiment);

        //self.closeExperiment();

    }
    

    initCondition(){

        if(this.currentCondition == 1){

            var condition = firstCondition;
            experimentResult.addTimestamp("firstConditionStarted", new Date().toISOString());

        } else {
            var condition = secondCondition;
            experimentResult.addTimestamp("secondConditionStarted", new Date().toISOString());
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

    closeExperiment(){
        var request = new XMLHttpRequest();
            request.onreadystatechange = function() { 
    
                if (request.readyState == 4 && request.status == 200){
                    console.log(request.responseText);
                } 
                    
            }
            request.open("GET", `/api/experiment/:${experiment.id}/close`, true); 
            request.send(experiment);
      
    }

    //source: https://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid
    uuidv4() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
        });
    }

}

export default AppManager;