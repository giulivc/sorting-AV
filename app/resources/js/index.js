import Config from "./utils/Config.js";
import AnimationController from "./controller/AnimationController.js";

var firstCondition, secondCondition;

function init(){

    //nach selbsteinschätzung EXPERIMENT STARTEN button onClick:
    getExperimentConditions();

    var firstConditionBtn = document.getElementById("first-condition-button");
        //secondConditionBtn = document.getElementById("second-condition-button");

        firstConditionBtn.addEventListener("click", (event) => initCondition(firstCondition));
        //secondConditionBtn.addEventListener("click", (event) => initCondition(secondCondition));

}

function getExperimentConditions(){

    /*var experiment = ExperimentManager.pickRandomExperiment(),
        firstCondition = experiment.conditions[0],
        secondCondition = experiment.conditions[1];
    */

    //example

   firstCondition = {"mode": "base", "algorithm": "insertion-sort"};
   secondCondition = {"mode": "step-through", "algorithm": "bubble-sort"};

}



function initCondition(condition){

    document.getElementById("first-page").style.display = "none";
    document.getElementById("visualization").style.display = "block";

    setAlgorithmTitle(condition);
    setPseudoCode(condition);

    displayModeParameter(condition.mode);
    initListener(condition);

}

function displayModeParameter(mode){
    switch(mode){
        case Config.MODE_SPEED:
            displaySpeedController();
            break;
        case Config.MODE_DATA:
            displayDataController();
            break;
        case Config.MODE_STEPTHROUGH:
            displayStepController();
            break;
        default:
            break;
    }
}


function setAlgorithmTitle(condition){
    
    var title;

    switch(condition.algorithm){
        case Config.BUBBLESORT: 
            title = "BubbleSort";
            break;
        case Config.INSERTIONSORT: 
            title = "InsertionSort";
            break;
        case Config.SELECTIONSORT: 
            title = "SelectionSort";
            break;
    }

    document.getElementById("algorithm-title").innerHTML = title;

}

function setPseudoCode(condition){  

    document.querySelectorAll(".pseudocode").forEach(function(ul){
       
        if(ul.id == condition.algorithm){
            ul.style.display = "block";
        } else {
            ul.style.display = "none";
        }
    });  

}


function displaySpeedController(){
    document.getElementById("speed-controller").style.display = "block";
}

function displayDataController(){
    document.getElementById("data-controller").style.display = "block";
}

function displayStepController(){
    document.getElementById("step-controller").style.display = "block";
    document.getElementById("base-controller").style.display = "none";
}

function initListener(condition){

    var animationController = new AnimationController(condition),
        container;

    if(condition.mode == Config.MODE_STEPTHROUGH){
        container = document.getElementById("step-controller");
    } else {
        container = document.getElementById("base-controller");
    }

    var startButton = container.querySelector("#start-button"),
        pauseButton = container.querySelector("#pause-button"),
        resetButton = container.querySelector("#reset-button");
        

    startButton.addEventListener("click", (event) => animationController.play());
    pauseButton.addEventListener("click", (event) => animationController.pause());
    resetButton.addEventListener("click", (event) => animationController.reset());

    if(condition.mode == Config.MODE_STEPTHROUGH){

        var skipToEndBtn = document.getElementById("skip-to-end-button"),
            backwardBtn = document.getElementById("backward-button"),
            forwardBtn = document.getElementById("forward-button");

        skipToEndBtn.addEventListener("click", (event) => animationController.skipToEnd());
        backwardBtn.addEventListener("click", (event) => animationController.stepBackward());
        forwardBtn.addEventListener("click", (event) => animationController.stepForward());
    }
    
    
}



init();