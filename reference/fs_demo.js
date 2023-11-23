const fs = require('fs');
const path = require('path');

// //Create folder
// fs.mkdir(path.join(__dirname, '/test'), {}, function(err){
//     if(err) throw err;
//     console.log('Folder created...');
// });

// //Ceate and write to file
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello World', err =>{
//     if(err) throw err;
//     console.log('Folder created...');
// });

// Read fille
fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) =>{
    if(err) throw err;
    console.log(data);
});