const fs = require('fs');


function readFile(fileName,enc) {
  return new Promise(function(resolve, reject){
    fs.readFile(fileName, enc, (err, data) => {
        err ? reject(err) : resolve(data);
    });
  });
}

function countWords(data){
	let words = data.split(' ');
	let words_count = new Map();

	words.forEach(e=>{
		words_count.set(e, (words_count.get(e)||0)+1);
	})

	console.log(sortMapByValue(words_count));
}

function sortMapByValue(m){
	return new Map(
		[...m].sort((a, b) => b[1] - a[1])
	);
}



let fileName = 'sample_data/lorem.txt';

readFile(fileName,'utf8')
	.then(countWords)
	.catch('Error')
