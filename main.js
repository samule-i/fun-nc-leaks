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
            fs.writeFile('./instructions.md', data, (error) => {
                if (error) console.log(error)
            })
        }
        )
        return response
    })
    request.end()
}

makeRequest()
module.exports = makeRequest