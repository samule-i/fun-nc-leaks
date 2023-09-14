const https = require('node:https')
const fs = require('fs')

function makeRequest(){
    const options = {
        hostname: 'nc-leaks.herokuapp.com',
        path: '/api/confidential',
        method: 'GET'
    }

    const request = https.request(options, (response) => {
        let result = ''
        response.on('error', (error)=>{console.log(error)})
        response.on('data', (data)=>{
            result += data
        })
        response.on('end', ()=>{
            markdown = JSON.parse(result).instructions
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