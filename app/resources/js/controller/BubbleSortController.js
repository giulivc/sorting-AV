import ArrayView from "../ui/ArrayView.js";
import CodeView from "../ui/CodeView.js";
import ControllerView from "../ui/ControllerView.js";
import Config from "../utils/Config.js";

var arrayView, codeView, controllerView,
    visualizationStarted,
    timeouts;

class BubbleSortController {

    constructor(unsortedArray, hasSequencer){

        this.unsortedArray = unsortedArray;
        
        arrayView = new ArrayView();
        arrayView.renderArray(unsortedArray);
        
        codeView = new CodeView();
        controllerView = new ControllerView(hasSequencer);

        visualizationStarted = false;
        
    }

    startVisualization(){

        if(!visualizationStarted){

            visualizationStarted = true;
            controllerView.changeToStopButton();

            this.bubbleSort(this.unsortedArray);
            
        } else {
    
            visualizationStarted = false;
            controllerView.changeToStartButton();

            this.reset(this.unsortedArray);
        }

    }
 

    bubbleSort(unsortedArray){

        //clone a work copy of unsorted array
        let array = [...unsortedArray],
            len = array.length,
            //each line of the step matrix represents a step to be animated in animateStepMatrix(stepMatrix)
            stepMatrix = [];

        for(let i = 0; i < len; i++){
            
            stepMatrix.push([]);

            for(let j = 0; j < len - i - 1; j++){

                //stores the two indices that should be focused (highlighted)
                stepMatrix.push([j, j+1]);

                if(array[j] > array[j+1]){

                    //stores if the two indices should be swapped 
                    stepMatrix.push([true, j, j+1])
                    let buf = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = buf;
                }
                
            }

            //stores which index should now be marked as sorted 
            stepMatrix.push([len - i - 1, true]);
            
        }   


        this.animateStepMatrix(stepMatrix);

        return array;

    }
 

    animateStepMatrix(stepMatrix){

        timeouts = [];

        
        

        for(let i = 0; i < stepMatrix.length; i++){

            if(i == 0){
                codeView.highlightStep(0);
            }

            timeouts.push(setTimeout(function animation(){

                if(stepMatrix[i].length == 2 && typeof stepMatrix[i][1] != "boolean"){
                    
                    arrayView.setFocusOnListItems(stepMatrix[i]);
                    codeView.highlightStep(2);

                }

                if(typeof stepMatrix[i][0] == "boolean"){
                    
                    var a = arrayView.getListItemById(stepMatrix[i][1]),
                        b = arrayView.getListItemById(stepMatrix[i][2]);
    
                    a.parentNode.insertBefore(b,a);

                    codeView.highlightStep(3);
                }

                if(stepMatrix[i].length == 2 && typeof stepMatrix[i][1] == "boolean"){
                    codeView.highlightStep(0);
                    arrayView.markListItemAsSorted(stepMatrix[i][0]);
                }

                if(!stepMatrix[i].length){
                    codeView.highlightStep(1);
                }

            }, (i+1) * Config.DEFAULT_SPEED_IN_MS));

        }

    }

    reset(unsortedArray){

        for(let i = 0; i < timeouts.length; i++){
            clearTimeout(timeouts[i]);
        }
        

        arrayView.clearArray()
        arrayView.renderArray(unsortedArray);

        codeView.removeHighlighting();

    }


}
    

export default BubbleSortController;