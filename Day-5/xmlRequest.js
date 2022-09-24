let apiurl = 'https://jsonplaceholder.typicode.com/users'

let conn = new XMLHttpRequest()

conn.open('GET', apiurl,true)

conn.send()

conn.onload = function () {
    console.log(conn)
    let users = JSON.parse(conn.responseText)
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
       tdNode1.innerHTML = users[i]['id']
       tdNode2.innerHTML = users[i]['name']
       tdNode3.innerHTML = users[i]['username']
       tdNode4.innerHTML = users[i]['email']
       trNode.appendChild(tdNode1)
       trNode.appendChild(tdNode2)
       trNode.appendChild(tdNode3)
       trNode.appendChild(tdNode4)
       document.getElementById('table').appendChild(trNode)
  }

}