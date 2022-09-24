let container = document.getElementById('background')
let imgArray =['image1.jpeg','image2.jpeg','image3.jpeg','image4.jpeg' ]
let i=-1
window.onload =function (){
   
    setInterval(show, 2000);
  
    }



    function show(){
        if(i<imgArray.length-1){
            i = i+1
        }
        else i =0;
console.log(imgArray[i])
    container.setAttribute('src',imgArray[i]) 
}
    // container.setAttribute('src',imgArray[2])

  