const fs = require ('fs');
const add = function (note=[] ,oldNote) {
    let finalNote = JSON.parse (oldNote)
    finalNote.push (note)
    let objectnote = JSON.stringify(finalNote)
    fs.writeFileSync ('note.txt', objectnote)
}
module.exports = add