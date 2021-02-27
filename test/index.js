const { createFile, createBuffer, createStream } = require('../index');
const fs = require('fs')

const html = fs.readFileSync('./index.hbs', 'utf8')

var document = {
    html: html,
    data: {
        // users: [],
        ownerEmail: "test@test.com",
        ownerName: "tester",
        ownerAddress: "owner Addresss ",
        ownerMobile: "7894561230",
        jewelleryType: "jewelleryType",
        jewelleryMaterial: "jewelleryMaterial",
        invoiceNo: "###000215",
        invoiceAmount: 325,
        purchaseDate: "02/10/2020",
        policyPremium: 32500,
        gst: 1200,
        finalPremium: 4500
    },
    path: `./policy.pdf`
};

var options = {
    format: "A3",
    orientation: "portrait",
    border: "10mm"
}


// createFile(document,options)
//     .then(res => {
//         console.log(" yes ")
//     })
//     .catch(err => {
//         console.log(" went wrong ", err)
//     })


// createBuffer(document, options)
//     .then(res => {
//         console.log(" buffer ", res)
//     })
//     .catch(err => {
//         console.log(" err ")
//     })

// createStream(document, options)
//     .then(res => {
//         console.log(" buffer ", res)
//     })
//     .catch(err => {
//         console.log(" err ")
//     })
