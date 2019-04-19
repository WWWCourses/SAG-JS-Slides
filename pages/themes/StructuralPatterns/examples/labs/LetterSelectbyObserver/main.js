(function(){
	let wordsList = ['orchidea', 'astronaut', 'origami', 'Argentina', 'rocket', 'ontology', 'Einstein'];
	let letters = ['a', 'y', 'o', 'u', 'e', 'r', 'n'];
	let words = document.getElementById('words');
	let select = document.getElementById('dropdown');
	let wordsListNodes = words.childNodes;


	document.addEventListener('DOMContentLoaded', function () {
		init.genListItems();
		init.genLetters();
		select.addEventListener('change', changeLetter);
	});

	var init = {
		genListItems: function(){
			for (let i = 0, len = wordsList.length; i < len; i++) {


			}
			letters.forEach(letter=>{
				let option = document.createElement('option');

			})
		},
		genLetters: function(){
			wordsList.forEach( word => {
				let li = document.createElement('li');
				li.innerHTML = word;
				words.appendChild(li);
			})
		}
	}


	function changeLetter(e) {
		var letter = e.target.value;
		wordsListNodes.forEach(function (element) {
			if(letter == element.innerText.toLowerCase().charAt(0)){
				element.style.color="red";
			}else{
				element.style.color="black"
			}
		});
	}
})();