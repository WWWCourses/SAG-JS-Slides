
let getData = new Promise( function(res, rej){
		// create an XMLHttpRequest object
		var xhr = window.XMLHttpRequest ? new XMLHttpRequest() :
						new ActiveXObject("Microsoft.XMLHTTP");

		// initializes the request:
		xhr.open("GET", './sample_data/lorem.txt');
		let data = "";

		// EventHandler, that will be fired each time when the xhr state changes
		xhr.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				data = this.responseText;
				res(data)
			}
		};


		// sends the request:
		xhr.send();
})


getData
	.then( doSomethingWithData )
	.catch( function(msg){console.log(msg);})


function doSomethingWithData(data){
	console.log(data);
}