let items= []

function additems(){
    let code = document.getElementById('item1').value
    let Name = document.getElementById('item2').value
    let cost = document.getElementById('item3').value
    let quantity = document.getElementById('item4').value
    let lineCost = quantity * cost

    let item ={
        itemCode : code,
        itemName : Name,
        itemCost : cost,
        itemQuantity : quantity,
        itemLineCost: lineCost

    }
items.push(item);
console.log(items)

function calculateST(){
    let sum =0
    const subtotal = items.map(item => {
        return sum += item.itemLineCost
    })
console.log(subtotal,"ST")
}

function display(){
    document.getElementById('textarea').value = items.map(item => {
        return item.itemCode + item.itemName + item.itemCost + item.itemQuantity + item.itemLineCost + "\n"
    })


calculateST()

}
display()

}