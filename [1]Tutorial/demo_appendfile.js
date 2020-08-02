var fs = require('fs');

/** Methods Append
 * Appends specified content to a file,
 * if file doesn't exist, the file will be created
 */
fs.appendFile('mynewfile1.txt', 'This is my content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
})