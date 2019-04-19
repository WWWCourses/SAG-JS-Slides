window.addEventListener("hashchange", hashChangeHandler, false);

function hashChangeHandler(e){
	var hashContent = window.location.hash;
	console.log( hashContent + ' has loaded');
}