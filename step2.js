const fs = require('fs');
const http = require('http');

let path = process.argv.slice(2);
let url = process.argv.slice(2);

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

async function webCat(url) {
    try {
      let resp = await axios.get(url);
      console.log(resp.data);
    } catch (err) {
      console.error(`Error fetching ${url}: ${err}`);
      process.exit(1);
    }
  }
  
  if (path.slice(0, 4) === 'http') {
    webCat(path);
  } else {
    cat(path);
  }