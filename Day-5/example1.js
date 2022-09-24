let apiurl = 'https://jsonplaceholder.typicode.com/users'

let conn = new XMLHttpRequest()
conn.open('GET', apiurl,true)

conn.send()

conn.onload = function () {
    console.log(conn)
     users = JSON.parse(conn.responseText)
    if(conn.status ==200){
       console.log(users)
       formatData(users)
    }
    else{
       console.log(users)
    }
}

function createElementByTag(tagname){
    return document.createElement(tagname)
}

function formatData(users){
   
    for( let i in users){
         let trNode = createElementByTag('tr')
         let tdNode1 = createElementByTag('td')
         let tdNode2= createElementByTag('td')
         let tdNode3 = createElementByTag('td')
         let tdNode4 = createElementByTag('td')
         let tdNode5 = createElementByTag('td')
  
         let btnEdit = createElementByTag('button')
         btnEdit.innerHTML = 'Edit'
         btnEdit.setAttribute('id', parseInt(i) )
         let btnDelete = createElementByTag('button')
         btnDelete.innerHTML = 'Delete'
         btnDelete.setAttribute('id', parseInt(i))

         btnEdit.onclick = editRecord
         
         tdNode5.appendChild(btnEdit)
         tdNode5.appendChild(btnDelete)
         
  
  
         tdNode1.innerHTML = users[i]['id']
         tdNode2.innerHTML = users[i]['name']
         tdNode3.innerHTML = users[i]['username']
         tdNode4.innerHTML = users[i]['email']
         trNode.appendChild(tdNode1)
         trNode.appendChild(tdNode2)
         trNode.appendChild(tdNode3)
         trNode.appendChild(tdNode4)
         trNode.appendChild(tdNode5)
         document.getElementById('tableData').appendChild(trNode)
    }
  
  }
  
  function editRecord(event){
    let index = event.target.getAttribute('id')
    let input1 = createElementByTag('input')
    let input2 = createElementByTag('input')
    let input3 = createElementByTag('input')
    let btnUpdate = createElementByTag('button')
    btnUpdate.innerHTML = 'Update'
    console.log(users[index].name,"name")
input1.value= users[index].name
input2.value= users[index].username
input3.value= users[index].email

    document.body.appendChild(input1)
    document.body.appendChild(input2)
    document.body.appendChild(input3)
    document.body.appendChild(btnUpdate)

}
editRecord()