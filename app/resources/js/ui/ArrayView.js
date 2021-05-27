var arrayContainer;

class ArrayView {


    constructor(){
        
        arrayContainer = document.getElementById("array");

    }

    renderArray(array){

        for(var i = 0; i < array.length; i++){

            var value = array[i];
            var valueBar = document.createElement("li");

            valueBar.style.height = value * 10 + 'px'; //TO DO: Berechnung

            arrayContainer.appendChild(valueBar);
        }

    }

    clearArray(){
        arrayContainer.innerHTML = "";
    }

    getListItemById(id){
        return arrayContainer.children[id];
    
    }

    markListItemAsSorted(id){
        let li = this.getListItemById(id);

        this.removeFocus();
        li.style.backgroundColor = "#BED733";
    }

    setFocusOnListItems(indices){

        let li1 = this.getListItemById(indices[0]),
            li2 = this.getListItemById(indices[1]);

        this.removeFocus();

        li1.style.backgroundColor = "#FF9900";
        li2.style.backgroundColor = "#FF9900";

    }

    removeFocus(){

        var listItems = arrayContainer.getElementsByTagName("li");

        for(let i = 0; i < listItems.length; i++){

            if(listItems[i].style.backgroundColor == "rgb(255, 153, 0)"){
                listItems[i].style.backgroundColor = "white";
            }
        }
    }


}

export default ArrayView;