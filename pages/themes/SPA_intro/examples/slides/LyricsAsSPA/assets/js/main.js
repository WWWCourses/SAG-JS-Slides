console.log(`main.js`);
var AJAX = {
	getByXHR: function(args){
		// create an XMLHttpRequest object
		var xhr = window.XMLHttpRequest ? new XMLHttpRequest() :
						new ActiveXObject("Microsoft.XMLHTTP");

		// initializes the request:
		xhr.open("GET", args.url, true);

		// EventHandler, that will be fired each time when the xhr state changes
		xhr.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				args.fn(this.responseText);
			};
		};

		// sends the request:
		xhr.send();
	},
	getByFetch: function(args){
		fetch(args.url)
			.then(function (response) {
				if( response.text){
					return response.text();
				}else{
					throw new Error("No response.text")
				}
			})
			.then(function (responseText) {
				// do something with response.text
				args.fn(responseText);
			})
			.catch( function(error){
	        		console.error(error.message);
			});
	},
};

// in real app, these data should come as a JSON by some service
var pagesContent = {
	'page1': 'data/charlotte_sometimes.txt',
	'page2': 'data/hey_you.txt',
	'page3': 'data/pictures_of_you.txt',
}
