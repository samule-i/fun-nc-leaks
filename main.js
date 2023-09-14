const https = require('node:https')
const fs = require('fs')

function makeRequest(){
    const options = {
        hostname: 'nc-leaks.herokuapp.com',
        path: '/api/confidential',
        method: 'GET'
    }

    const request = https.request(options, (response) => {
        
        response.on('error', (error)=>{console.log(error)})
        response.on('data', (data)=>{
            markdown = JSON.parse(data).instructions
            fs.writeFile('./instructions.md', markdown, (error) => {
                if (error) console.log(error)
            })
        })

    })

    request.end()
    return
}

makeRequest()
module.exports = makeRequest