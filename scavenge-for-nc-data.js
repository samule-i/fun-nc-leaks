const getPeople = require('./get-people')
const getInterests = require('./get-interests')
const getPets = require('./get-pets')
const fs = require('fs')


async function scavengeForNcData(){

    getPeople()
    setTimeout(getInterests, 2000)
    setTimeout(getPets, 2000)

}
scavengeForNcData()