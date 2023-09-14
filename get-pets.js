const fs = require('fs')
const https = require('node:https')

function getPets(){

    const personPets = []
    const data = fs.readFileSync(`northcoders.json`)
    const obj = JSON.parse(data)

    for( const i of obj.people ){
        const options = {
            hostname: 'nc-leaks.herokuapp.com',
            path: `/api/people/${i.username}/pets`,
            method: 'GET'
        }

        const request = https.request(options, (response) =>{
            response.on('error', (error)=>{
                console.log(error)
            })

            response.on('data', (data)=>{
                if (response.statusCode === 200){
                    const personObject = JSON.parse(data)
                    personPets.push(personObject.person)
                }
            const personObject = JSON.parse(data)
            personPets.push(personObject.person)
            })

            response.on('end', () => {
                fs.writeFileSync('pets.json', JSON.stringify(personPets))
            })
        })
        request.end()
    }
}

module.exports = getPets