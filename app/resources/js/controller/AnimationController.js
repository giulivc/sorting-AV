import BubbleSort from "../algorithms/BubbleSort.js";
import InsertionSort from "../algorithms/InsertionSort.js";
import SelectionSort from "../algorithms/SelectionSort.js";

import ArrayView from "../ui/ArrayView.js";
import CodeView from "../ui/CodeView.js";
import ControllerView from "../ui/ControllerView.js";

import Config from "../utils/Config.js";
import InputDataController from "./InputDataController.js";
import SpeedController from "./SpeedController.js";

var algorithm, speedController, dataController,
    visualizationStarted, backwardMode, forwardMode,
    completedSteps, stepCountWithSpeed,
    timeouts, startTimeInMs, prevSpeed;

class AnimationController {

    constructor(condition){

        this.mode = condition.mode;

        self = this;

        // generate initial array
        var array = [];

        for(let i = 0; i < Config.DEFAULT_ARRAY_SIZE; i++){
            array[i] = 1 + Math.floor(Math.random() * Config.DEFAULT_MAX_VALUE); 
        }

        this.unsortedArray = array;

        switch(condition.algorithm){
            case Config.BUBBLESORT: 
                algorithm = new BubbleSort(array);
                break;
            case Config.INSERTIONSORT: 
                algorithm = new InsertionSort(array);
                break;
            case Config.SELECTIONSORT: 
                algorithm = new SelectionSort(array);   
                break;
        }

        if(condition.mode == Config.MODE_SPEED){
            speedController = new SpeedController(this);
        } else if(condition.mode == Config.MODE_DATA){
            dataController = new InputDataController(this);
        }

        this.speed = Config.DEFAULT_SPEED_IN_MS;

        completedSteps = [];

        this.sortedArray = algorithm.sort();

        this.currentStep = 0;
        this.resumeTimeInMs = 0;

        visualizationStarted = false;
        backwardMode = false;
        forwardMode = false;
        timeouts = [];
        
        ControllerView.disableResetButton();
        ArrayView.renderArray(this.unsortedArray);
        
 
    }

    setUnsortedArray(array){
        this.unsortedArray = array;
        algorithm.array = array;
    }

    setSpeed(speed){
        this.speed = speed;
    }



    play(){

        backwardMode = false;
        forwardMode = false;

        this.speed = this.getAnimationSpeed();

        if(!visualizationStarted){

            //startVisualization

            this.reset();

            ControllerView.enableResetButton();

            visualizationStarted = true;

            completedSteps = [];

            this.sortedArray = algorithm.sort();

            ControllerView.changeToPauseButton();
            this.animateStepMatrix(this.speed, 0);
            
        } else {

            //resume visualization

            ControllerView.changeToPauseButton();
            
            var self = this;
            
            setTimeout(function(){

                self.animateStepMatrix(this.speed, self.currentStep + 1);

            }, this.resumeTimeInMs);            
           
        }

    }

    getAnimationSpeed(){

        var speed;

        if(this.mode == Config.MODE_SPEED){
            speed = speedController.getCurrentSpeed();
        } else {
            speed = this.speed;
        }


        return speed;
    }


    animateStepMatrix(speed, step){

        timeouts = [];

        startTimeInMs = Date.now();
        prevSpeed = speed;
        stepCountWithSpeed = 0;

        var index = 0;
            
        for(let i = step; i < algorithm.stepMatrix.length; i++){

            timeouts.push(setTimeout(function animation(){

                visualizationStarted = algorithm.animateStep(i);

                completedSteps.push(i);
                
                stepCountWithSpeed++;
                

            }, index * speed));

            index++;

        }
    }

    getCurrentStep(){
        return completedSteps[completedSteps.length - 1];
    }



    reset(){

        ControllerView.disableResetButton();

        visualizationStarted = false;

        for(let i = 0; i < timeouts.length; i++){
            clearTimeout(timeouts[i]);
        }
        

        ArrayView.clearArray()
        ArrayView.renderArray(this.unsortedArray);

        CodeView.removeHighlighting();

        ControllerView.changeToStartButton();

        // reset speed
        if(this.mode == Config.MODE_SPEED){
            document.getElementById("speed-slider").value = Config.DEFAULT_SPEED_IN_MS;
            this.speed = Config.DEFAULT_SPEED_IN_MS;
        }

        

        this.currentStep = 0;

    }


    skipToEnd(){

        for(let i = 0; i < timeouts.length; i++){
            clearTimeout(timeouts[i]);
        }
        

        ArrayView.clearArray();
        ArrayView.renderArray(this.sortedArray);

        for(let i = 0; i < this.sortedArray.length; i++){
            ArrayView.markListItemAsSorted(i);
        }

        CodeView.removeHighlighting();

        ControllerView.changeToStartButton();
        ControllerView.enableResetButton();

    }

    onSpeedChanged(speed){

        if(visualizationStarted){
            this.changeSpeed(speed);
        }

    }


    changeSpeed(speed){

        var currentStep = this.getCurrentStep(),
            timeLeftInMs =  (prevSpeed * stepCountWithSpeed) - (Date.now() - startTimeInMs),
            context = this;


        for(let i = 0; i < timeouts.length; i++){
            clearTimeout(timeouts[i]);
        }
    
        setTimeout(function(){
            
            context.animateStepMatrix(speed, currentStep + 1);

        }, timeLeftInMs);  
    }


    pause(){

        this.currentStep = this.getCurrentStep();
        this.resumeTimeInMs = (prevSpeed * stepCountWithSpeed) - (Date.now() - startTimeInMs);

        for(let i = 0; i < timeouts.length; i++){
            clearTimeout(timeouts[i]);
        }

        ControllerView.changeToStartButton();

        
    }



    stepBackward(){

        this.currentStep = this.getCurrentStep();

        forwardMode = false;

        if(!backwardMode){
            backwardMode = true;

            for(let i = 0; i < timeouts.length; i++){
                clearTimeout(timeouts[i]);
            }

            ControllerView.changeToStartButton();

            algorithm.animateStep(this.currentStep);


        
        } else {

            if(this.currentStep){
                algorithm.animateStep(this.currentStep - 1);

                completedSteps.pop();

            } else {

                // TO DO: reset und opacity 50%
                return;
            }
           
        }

    }


    stepForward(){
            
        this.currentStep = this.getCurrentStep();

        backwardMode = false;


        if(!forwardMode){
            forwardMode = true;

            for(let i = 0; i < timeouts.length; i++){
                clearTimeout(timeouts[i]);
            }

            ControllerView.changeToStartButton();

        
        } else {

            if(this.currentStep != algorithm.stepMatrix.length - 1){

                algorithm.animateStep(this.currentStep + 1);
                completedSteps.push(this.currentStep + 1);

                
            } else {

                //TO DO

                return;
            }
         
        }

    }


}
    

export default AnimationController;