const fs = require('fs');
const util = require('util');
const { checkIfExist, checkLength } = require('./mymodule');
/*
Another way to import the function and call it
const my_module  = require('./mymodule');
my_module().checkIfExist
*/

const readFileP = util.promisify(fs.readFile);

const bigFile = readFileP('./myfile.txt', 'utf8')
const searchFile = readFileP('./anotherfile.txt', 'utf8')

/**
 * only when .then is called the promise will run and resolved.
 * when resolved the function in then method will be executed
 */
const t = new Date();
Promise.all([bigFile, searchFile]).then(([data, search]) => {
    checkIfExist(data, search);
    console.log("time", new Date - t);

})

Promise.all([bigFile, searchFile]).then(([data, search]) => {
    checkLength(data, search);
})
/**
 * This the old code with callback function:
 * fs.readFile('./anotherfile.txt', (err, search) =>{
    if(err) throw error;

    fs.readFile('./myfile.txt', (err, data) => {
        if (err) throw error;
        // console.log("length", data.length);
        checkIfExist(data, search);
        console.log("time", new Date - t);
    });
    // console.log('data', data);   
})
 */

console.log("end of the program");
