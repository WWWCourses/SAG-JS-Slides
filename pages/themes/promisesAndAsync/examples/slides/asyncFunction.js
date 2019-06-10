const fs = require('fs');

// Reads text from the file asynchronously and returns a Promise.
function read(fileName) {
  return new Promise((resolve, reject) => {

    fs.readFile(fileName, "utf8", (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
}

let countUniqueWords = function(data){
  let wordsCount = new Map();

  let dataArr = data.split(' ');
  // [ 'one', 'two', 'one', 'two', 'three', 'one' ]
  // console.log(dataArr);
  dataArr.forEach( function(e){
    if( wordsCount.has(e) ){
      wordsCount.set(e, wordsCount.get(e)+1 )
    }else{
      wordsCount.set(e, 1)
    }
  })

  console.log(wordsCount);
}

(async () => {
  let fileName = 'sample_data/lorem.txt';

  const content = await read(fileName);
  console.log(content);

  countUniqueWords(content);
})();