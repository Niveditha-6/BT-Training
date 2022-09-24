function showPolicy(){
    let poilicySelected1 = document.getElementById('policy1').checked
    let poilicySelected2 = document.getElementById('policy2').checked
    let poilicySelected3 = document.getElementById('policy3').checked
let display = ""
    if(poilicySelected1){
     display= document.getElementById('policy1').value

    }
    if(poilicySelected2){
        display += document.getElementById('policy2').value

    }
    if(poilicySelected3){
        display+= document.getElementById('policy3').value

    }
    document.getElementById('textArea').innerHTML = display
   
}

   