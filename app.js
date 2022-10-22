const add = require ('./add')
const read = require ('./read')
const write = require ('./write')
const del = require ('./del')
const present = require ('./present')
const update = require ('./update')
const data = process.argv

//get user input
if (data [2] === "add"){ 

//build object
const note = {

    "id": data[3],
    "title": data [4],
    "body": data [5],

}
//get note.xt contents
const oldNote = read()

//add new note to note.txt
add(note, oldNote)

}
if (data[2]==='read') {
  //import present
  const present = require('./present')
  present(read())

}
if (data[2] == "delete"){
  
  const oldNote=read()
  

   
   const id =data[3]

   del(id,oldNote)
   console.log(read())

}
 if(data[2] = 'update') {
  const note = {
    id: data[3],
    title: data[4],
    body: data[5]
  }
  const oldNote = read()

  update(note,oldNote)
  
  console.log(update); 

}