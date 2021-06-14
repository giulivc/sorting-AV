import BubbleSortController from "./controller/BubbleSortController.js";
import Config from "./utils/Config.js";


function init() {

    var array = [];

    for(let i = 0; i < Config.DEFAULT_ARRAY_SIZE; i++){
        array[i] = Math.floor(Math.random() * (Config.DEFAULT_MAX_VALUE + 1)); 
    }

    var bubbleSortController = new BubbleSortController(array, true),
        startButton = document.getElementById("start-button");

    startButton.addEventListener("click", (event) => bubbleSortController.startVisualization());
    


}

init();