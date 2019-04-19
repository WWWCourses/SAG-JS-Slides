var myApp = function(){
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
			letters.forEach(letter=>{
				// TODO: ....
				let option = document.createElement('option');
				option.setAttribute("value", letter);
				option.innerHTML = letter;
				select.appendChild(option);
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
		var letter;
		if( typeof e === 'string'){
			letter = e;
		}else{
		 	letter = e.target.value;
		};

		console.dir(wordsListNodes);
		console.log(`WORDS: ${wordsListNodes.length}`);

		wordsListNodes.forEach(function (element) {
			if(letter == element.innerText.toLowerCase().charAt(0)){
				element.style.color="red";
			}else{
				element.style.color="black"
			}
		});
	}


	// API:
	return{
		setLetter: changeLetter,
	}
};

var app = myApp() ;
app.setLetter('o');