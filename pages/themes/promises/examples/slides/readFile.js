// get content of a txt file
// let data = 'one two one two three one';

// count unique words

// one: 3
// two: 2
// three:1

// const fs = require('fs');


// let countUniqueWords = function(data){
// 	let wordsCount = new Map();

// 	let dataArr = data.split(' ');
// 	// [ 'one', 'two', 'one', 'two', 'three', 'one' ]
// 	// console.log(dataArr);
// 	dataArr.forEach( function(e){
// 		if( wordsCount.has(e) ){
// 			wordsCount.set(e, wordsCount.get(e)+1 )
// 		}else{
// 			wordsCount.set(e, 1)
// 		}
// 	})

// 	console.log(wordsCount);
// }

// let fileName = 'sample_data/lorem.txt';
// fs.readFile(fileName, 'utf8',  function(err, data){
// 	countUniqueWords(data);
// });

// console.log(`End`);
// let dictObj = {
// 	'apple': 'ябълка',
// 	'orange': 'портокал'
// }

// console.log( dictObj.apple );


// let dict = new Map();
// dict.set('apple','ябълка');
// dict.set('orange', 'портокал');


// console.log( dict.keys() );