var arrayContainer;

class ArrayView {


    constructor(intArray){
        this.data = intArray;
        arrayContainer = document.getElementById("array");

    }

    printArray(){
        console.log(this.data);
    }

    renderArray(){

        for(var i = 0; i < this.data.length; i++){

            var value = this.data[i];

            var valueBar = document.createElement("li");

            valueBar.classList.add("unsorted");
            valueBar.style.height = value * 10 + 'px'; //TO DO: Berechnung

            arrayContainer.appendChild(valueBar);
        }

    }

    getListItemById(id){
        return arrayContainer.children[id];
    
    }

    setListItemSortedWithId(id){
        let li = this.getListItemById(id);
        li.classList.remove("unsorted");
        li.classList.add("sorted");
    }

    setListItemFocusedWithId(id){
        let li = this.getListItemById(id);
        li.classList.remove("unsorted");
        li.classList.add("focused");
    }


}

export default ArrayView;