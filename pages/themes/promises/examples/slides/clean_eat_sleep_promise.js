let cleanRoom = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve(`cleanRoom: resolved after 1s`);
  }, 1000);
});


let eatIcecream = function(msg){
	console.log(msg);

	return new Promise(function (resolve, reject){
		console.log(`Icecream time! `);
		setTimeout( _=>{
			resolve('eatIcecream: resolved after 2s')
		},2000)
	})
}

let goToBed = function(msg){
	console.log(msg);
	console.log(`Good night`);
}



cleanRoom.then(eatIcecream).then(goToBed);
