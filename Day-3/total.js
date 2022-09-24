let display = ""
let displayArray=[]

function addItem(){

    let code = document.getElementById('item1').value
    let Name = document.getElementById('item2').value
    let cost = document.getElementById('item3').value
    let quantity = document.getElementById('item4').value
    let lineCost = quantity * cost

display += code + " " + Name +" " + cost + " " + quantity + lineCost + "\n" ;
displayArray[displayArray.length] = lineCost
console.log(displayArray)
   
    document.getElementById("textarea").innerHTML= display;

    function calculateSub(){
        let subtotal = 0
for(let i in displayArray){
subtotal += displayArray[i]
}
console.log(subtotal)
document.getElementById("subtotal").value= subtotal;


function calculateTotal(){
    let saleTax =  subtotal * 0.7;
    let totalAmont = saleTax + subtotal;
    console.log(saleTax,"sale")

document.getElementById("tax").value= saleTax;
document.getElementById("total").value= totalAmont;

}
calculateTotal()

    }

  
    calculateSub()

  
    
}