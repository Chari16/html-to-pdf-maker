const { createBuffer, createStream, createFile } = require('html-to-pdf-maker');

const fs = require('fs')

const html = fs.readFileSync('./index.hbs', 'utf8')

var document = {
    html: html,
    data: {
        users: [
        {
            name: "ABC",
            age: "5"
        },
        {
            name: "XYZ",
            age: "6"
        },
        {
            name: "CCD",
            age: "8"
        }
        ]
    },
    path: `./test.pdf`
};

var options = {
    format: "A3",
    orientation: "portrait",
    border: "10mm"
}


createFile(document,options)
    .then(res => {
        console.log(" yes ")
    })
    .catch(err => {
        console.log(" went wrong ", err)
    })


createBuffer(document, options)
    .then(res => {
        console.log(" buffer ", res)
    })
    .catch(err => {
        console.log(" err ")
    })

createStream(document, options)
    .then(res => {
        console.log(" buffer ", res)
    })
    .catch(err => {
        console.log(" err ")
    })
