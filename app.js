const write = require ('./write');
const read = require ('./read');
const add = require ('./add')
const present = require ('./present')
const del = require ('./del')
//Get user input
const data = process.argv
var note ={}
if (data[2] == 'add') {
    //Build object
    note = {
        id: data [3] ,
        title: data[4] ,
        body: data [5]
    }
    //Get oldNote value
    var oldNote = read()
    //add note to note.txt
    add(note ,oldNote)
}
if(data[2] == 'read') {
    //import present
    const present = require ('./present')
    present (read())
}
if (data[2] == 'delete') {
    //Get oldNote values
    const oldNote = read()
    //Get id to delete from notes
    const id = data[3]
    del (id, oldNote)
    present (read())
}
