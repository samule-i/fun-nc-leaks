const https = require('node:https')
const fs = require('fs')
const { log } = require('node:console')


function getInterests(){
    let personInterests = []
    let data = fs.readFileSync(`northcoders.json`)
    let obj = JSON.parse(data)

    for (const i of obj.people) {
        const options = {
            hostname: 'nc-leaks.herokuapp.com',
            path: `/api/people/${i.username}/interests`,
            method: 'GET'
        }
        const request = https.request(options, (response) =>{
            response.on('error', (error)=>{console.log(error)})
            response.on('data', (data)=>{
            const personObject = JSON.parse(data)
            personInterests.push(personObject.person)
            })
            response.on('end', () => {
                fs.writeFileSync('interests.json', JSON.stringify(personInterests))
            })
        })
        
        request.end()
    }
    
}

module.exports = getInterests