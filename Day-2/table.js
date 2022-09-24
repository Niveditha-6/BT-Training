function getTotal(){
    
    let arr = document.getElementsByTagName("td");
console.log(arr)
let total = 0;
for( i=1 ;i< arr.length-1 ; i=i+2){
    
total += parseInt(arr[i].innerHTML);
console.log(total)
}
document.getElementById('result').innerHTML = total
}