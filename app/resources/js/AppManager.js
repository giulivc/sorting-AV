import Config from "./utils/Config.js";
import Questionnaire from "./experiment/Questionnaire.js";
import VisualizationView from "./ui/VisualizationView.js";
import Quiz from "./experiment/Quiz.js";
import AnimationController from "./controller/AnimationController.js";

var firstPage, 
    surveyDiv, visualizationDiv, instructionDiv,
    lastPage;

var firstCondition, secondCondition,
    experimentResult = {},
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
        
    }

    startQuestionnaire(){

        firstPage.style.display = "none";
        surveyDiv.style.display = "block";
    
        var questionnaire = new Questionnaire();
        questionnaire.addOnCompleteListener(this.processQuestionnaireData);

    }


    processQuestionnaireData(sender) {
        var questionnaireData = sender.data;
    
        Object.assign(experimentResult, questionnaireData);
    
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
    }

    processQuizData(sender) {

        var quizData = sender.data;
    
        surveyDiv.innerHTML = "";
    
        if(self.currentCondition == 1){
    
            experimentResult.firstCondition = quizData;
    
            instructionDiv.style.display = "block";
            instructionDiv.querySelector("#algorithm").innerHTML = self.stringifyAlgorithm(secondCondition.algorithm);

        } else {
    
            experimentResult.secondCondition = quizData;
    
            lastPage.style.display = "block";
    
            self.experiment.results.data = experimentResult;
    
            //console.log(self.experiment);
    
            var request = new XMLHttpRequest();
            request.onreadystatechange = function() { 
    
                if (request.readyState == 4 && request.status == 200){
                    console.log(request.responseText);
                } 
                    
            }
            request.open("GET", `https://algorithms.software-engineering.education/api/experiment/:${experiment.id}/close`, true); 
            request.send(experiment);
      
        }
    
        self.currentCondition++;
    
    }
    


    initCondition(){

        if(this.currentCondition == 1){

            var condition = firstCondition;

        } else {
            var condition = secondCondition;
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

    //source: https://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid
    uuidv4() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
        });
    }

}

export default AppManager;