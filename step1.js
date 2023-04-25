const fs = require('fs');

let path = process.argv.slice(2);

function cat(path){
    fs.readFile(path, 'utf8', function(err, data){
        if (err){
            console.log(err);
            process.exit(1);
        }
        console.log(`file contents: ${data}`)
    })
    console.log('reading file')
}

cat(`${path}`);