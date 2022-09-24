let selectedOptions, description,amount,income=0,expense=0;
function getInfo(){
     selectedOptions = document.getElementById('select').value
    let description = document.getElementById('description').value
    let amount = document.getElementById('amount').value

if(selectedOptions && description && amount){
    check(selectedOptions,description,amount)
}

}

function check(selectedOptions,description,amount){
    if(selectedOptions == "-"){
        console.log("inside minus")


        let newLine = document.createElement('div')
        newLine.innerHTML = description + "  " + amount
        document.getElementById('C3').appendChild(newLine)
        expense = parseInt(expense) + parseInt(amount)

console.log(expense,"ex")
    }
    else if(selectedOptions == "+"){
        console.log("inside add")

        let newLine = document.createElement('div')
        newLine.innerHTML = description + "  " + amount
        document.getElementById('C1').appendChild(newLine)    
   
   
        income =parseInt(income)+ parseInt(amount)
console.log(income,"in")
   
    }



displayExpenses(expense);
displayIncome(income)
displayMoneyLeft(income,expense)
}


function displayIncome(income){
    console.log(income,"displayincome")
    document.getElementById('income').innerHTML = income

}

function displayMoneyLeft(income,expense){
    console.log(income,expense,"moneyleft")
    document.getElementById('moneyLeft').innerHTML = parseInt(income) - parseInt(expense)

}
function displayExpenses(expense){
    console.log(expense,"expense")

    document.getElementById('expense').innerHTML = expense

}

