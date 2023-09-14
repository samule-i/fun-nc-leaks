const https = require('node:https')
const fs = require('fs')

function getPeople () {

    const options = {
    hostname: 'nc-leaks.herokuapp.com',
    path: '/api/people',
    method: 'GET'
    }

    const request = https.request(options, (response) =>{
        let body = ''
        response.on('error', (error) => {console.log(error)})
        response.on('data', (data) => {
            body += data.toString()
        })
        
        response.on('end', () => {
            //
            fs.writeFile('northcoders.json', body, (error) => {
                if (error) console.log(error)
            })
        })
    })
    request.end()
}
getPeople()