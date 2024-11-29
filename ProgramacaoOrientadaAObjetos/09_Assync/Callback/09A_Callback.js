const fs = require('fs')

const onRead = function onRead (err, buf) {
    if(err)
        console.log("houve um erro")
    else
        console.log(buf.toString())
}

fs.readFile( 'TextoQualquer.txt', onRead )