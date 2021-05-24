import ArrayView from "./ui/ArrayView.js";
import CodeView from "./ui/CodeView.js";
import ControllerView from "./ui/ControllerView.js";

function init() {

    var array = [1, 3, 2, 16, 14, 32, 19, 3, 24, 25, 3, 31, 11]; // TO DO: Random Array

    var arrayView = new ArrayView(array);
    arrayView.renderArray();

    arrayView.setListItemFocusedWithId(1);
    arrayView.setListItemSortedWithId(5);

    var codeView = new CodeView();
    var controllerView = new ControllerView();

    codeView.highlightStep(2);



    

}

init();