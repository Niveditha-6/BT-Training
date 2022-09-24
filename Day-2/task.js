let displayArray = []
    
function addtask(){
    let task = prompt('Please enter the task');
   displayArray[displayArray.length] = task
    document.getElementById('textArea').innerHTML = displayArray
}


function deletetask(){
    let task = prompt('Please enter the task to be deleted');
    
    if(  task <  displayArray.length ) {

        delete displayArray[task];
        document.getElementById('textArea').innerHTML = displayArray
    }
    else{
       alert("not valid")
    }
    

}
