
let getData = function(apiURL){
	return new Promise( function(resolve, reject){
		// create an XMLHttpRequest object
		var xhr = window.XMLHttpRequest ? new XMLHttpRequest() :
						new ActiveXObject("Microsoft.XMLHTTP");

		// initializes the request:
		xhr.open("GET", apiURL);

		// EventHandler, that will be fired each time when the xhr state changes
		xhr.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				resolve(this.responseText)
			}
		};

		// sends the request:
		xhr.send();
	})
}


let apiURLbase = 'https://api.adorable.io/avatar/:';
let id = Math.floor(Math.random()*100);

getData(apiURLbase+id)
	.then( doSomethingWithData )
	.catch( function(msg){console.log(msg);})


function doSomethingWithData(data){
	console.log(data);
}