function display(para){
    let dis = para.getAttribute('src')
    document.getElementById('background').setAttribute('src',dis)
}
 function normal(){
    let background = document.getElementById('background')

    background.setAttribute('src',background.getAttribute('src'))
 }

