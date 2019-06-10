let promiseForEven = new Promise( (resolve, reject)=>{
	setTimeout(function(){
		let num = Math.round(Math.random()*100);
		console.log(`num = ${num}`);

		if(num%2 === 0){
			resolve(num)
		}else{
			reject(new Error(`${num} is not even!`))
		}
	},2000)

})

function promiseRejected(num){
	console.log('Error: '+num);
}


promiseForEven
	.then( num => {
		console.log(`I have an EVEN number: ${num}`);
	})
	.catch( (err) => {
		console.log(err);
	} )


console.log(`I'm doing something important`);
