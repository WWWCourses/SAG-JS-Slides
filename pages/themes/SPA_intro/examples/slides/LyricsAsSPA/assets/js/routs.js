var nodes =  {
	pagesWrapper: document.getElementsByClassName('pagesWrapper')[0],
	page1: document.getElementById('page1'),
	page2: document.getElementById('page2'),
	page3: document.getElementById('page3'),
}

var hashChangeHandler = function(e){
	var cHash = window.location.hash;
	console.log("hash:" + cHash);

	if ( cHash == '#/page/1') {
		console.log(`Page 1 loaded`);
		showPage('page1');
	}else if( cHash == '#/page/2') {
		console.log(`Page 2 loaded`);
		showPage('page2');
	}else if( cHash == '#/page/3') {
		console.log(`Page 3 loaded`);
		showPage('page3');
	}
}

var showPage = function(id){
	// hide all
	var pages = nodes.pagesWrapper.children;
	for(var i=0; i<pages.length; i++){
		pages[i].style.display='none';
	}

	// show page
	nodes[id].style.display = "block";

	// get content by AJAX
	AJAX.getByFetch( {
		url: pagesContent[id],
		fn: function(content){
			nodes[id].innerHTML = content;
		}
	} );
}



window.addEventListener("hashchange", hashChangeHandler, false);
