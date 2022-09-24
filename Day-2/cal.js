
function fun(){
    let p = document.getElementById("amnt").value;
    let t = document.getElementById("rate").value;
    let r = document.getElementById("year").value;
    let res = (p*t*r)/100;
    alert(res)
}