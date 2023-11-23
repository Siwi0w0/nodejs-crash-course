const http = require('http');

// Create sercer object
http.createServer((req, res) => {
    // Write response
    res.write('Helllo World');
    res.end();
})
.listen(5000, ()=> console.log('Server running...'));