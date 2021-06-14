import Config from "../utils/Config.js";
import ArrayView from "../ui/ArrayView.js";


var randomGenDiv, customGenDiv,
    dataToggle, generateRandomButton, generateCustomButton,
    sizeSlider, sizeText, modePicker,
    customArrayInputBox, errorMsgField;

class InputDataController {

    constructor(animationController){

        this.animationController = animationController;

        randomGenDiv = document.getElementById("random-generator");
        customGenDiv = document.getElementById("custom-generator");

        dataToggle = document.getElementById("data-toggle");
        dataToggle.addEventListener("change", (event) => this.onToggleChecked());

        generateRandomButton = document.getElementById("generate-random");
        generateRandomButton.addEventListener("click", (event) => this.onGenerateRandom());

        generateCustomButton = document.getElementById("generate-custom");
        generateCustomButton.addEventListener("click", (event) => this.onGenerateCustom());

        sizeSlider = document.getElementById("size-setting");
        sizeSlider.addEventListener("input", (event) => this.onSizeInput());

        sizeText = document.getElementById("size-text");

        customArrayInputBox = document.getElementById("custom-input");

        errorMsgField = document.getElementById("error-text");

        modePicker = document.getElementById("mode-picker");

        modePicker.addEventListener("click", (event) => this.onModeSelected(event.target));

        this.selectedMode = Config.MODE_RANDOM;

        
    }

    onToggleChecked(){
        if(dataToggle.checked){
            this.displayCustomGenerator();
        } else {
            this.displayRandomGenerator();
        }
    }

    displayRandomGenerator(){
        customGenDiv.style.display = "none";
        randomGenDiv.style.display = "block";
    }

    displayCustomGenerator(){
        randomGenDiv.style.display = "none";
        customGenDiv.style.display = "block";
    }
    
    onGenerateRandom(){

        this.animationController.reset();

        let size = sizeSlider.value, array = [];

        for(let i = 0; i < size; i++){
            array[i] = 1 + Math.floor(Math.random() * Config.DEFAULT_MAX_VALUE);
        }

        

        switch(this.selectedMode){

            case Config.SETTING_RANDOM: 
                break;

            case Config.SETTING_NEARLY_SORTED: 
                array.sort(); // TO DO
                break;

            case Config.SETTING_SORTED: 
                array.sort(function(a, b){ return a-b });
                break;
        }


        ArrayView.clearArray();
        ArrayView.renderArray(array);

        this.animationController.setUnsortedArray(array);
        this.animationController.setSpeed(-11.6 * (size-15) + 1000);
        


    }

    onGenerateCustom(){

        this.animationController.reset();

        errorMsgField.style.visibility = "hidden";
        
        var input = customArrayInputBox.value;

        if(this.isValid(input)){

            let inputArray = input.split(','),
                size = inputArray.length,
                array = [];


            if(size >= 4){
                if(size > 20){
                    errorMsgField.style.visibility = "visible";
                    errorMsgField.innerHTML = "You exceeded the maximum of 20 elements.";
                    return;
                }
                for(let i = 0; i < size; i++) {
                    if(inputArray[i] > Config.DEFAULT_MAX_VALUE){

                        errorMsgField.style.visibility = "visible";
                        errorMsgField.innerHTML = "You can't enter numbers higher than " + Config.DEFAULT_MAX_VALUE + ". (" + inputArray[i] + " is out of range)";
                        return;

                    } else if (inputArray[i] <= 0){

                        errorMsgField.style.visibility = "visible";
                        errorMsgField.innerHTML = "You can't enter numbers less than or equal to 0. (" + inputArray[i] + " is out of range)";
                        return;

                    } else {
                        array[i] = parseInt(inputArray[i]);
                    }
                }
    
                ArrayView.clearArray();
                ArrayView.renderArray(array);
    
                this.animationController.setUnsortedArray(array);
            } else {
                errorMsgField.style.visibility = "visible";
                errorMsgField.innerHTML = "You have to enter a minimum of 4 elements.";
                return;
            }

        }


    }

    isValid(input){

        
        if(input.match("^[0-9]+(,[0-9]+)*$")){
            return true;
        } else {
            errorMsgField.style.visibility = "visible";
            errorMsgField.innerHTML = "Your entry doesn't match the required format.";
            return false;
        }
        
    }

    onSizeInput(){
        sizeText.innerHTML = "Array Size: " + sizeSlider.value;
    }

    onModeSelected(target){

        var modeButtons = target.parentNode.children;
        for(let i = 0; i <  modeButtons.length; i++){
            modeButtons[i].classList.remove("selected");
        }

        target.classList.add("selected");

        this.selectedMode = parseInt(target.id);

    }


}

export default InputDataController;