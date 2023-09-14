const makeRequest = require('../main')
const fs = require('fs')
describe('makeRequest', () => {
    test('should create a file called instructions.md', async () => {
        // const fnPromise = new Promise( (resolve, reject) => {
        //     const result = makeRequest()
        //     if (result) {
        //         resolve("messages")
        //     } else {
        //         reject('failed to run')
        //     }
        // }) 
        // makeRequest()
        // fnPromise.then( (msg)=>{
        //     console.log(msg, "<<<<<<<<<<<")
        // })
        // fnPromise.then( (msg) => {
        //     const stat = fs.statSync('./instructions.md')
        //     expect(stat.isFile()).toBeTruthy()
        // })
        // await fnPromise.resolve()
        const stat = fs.statSync('./instructions.md')
        expect(stat.isFile()).toBeTruthy()
    });
});