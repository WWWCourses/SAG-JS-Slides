var selectors = {
  even: "li:nth-child(2n)",
  odd: "li:nth-child(2n+1)"
};

var liNodes = {
  even: [],
  odd: []
};

var buttons = {
	'even': document.getElementById('colorEven'),
	'odd': document.getElementById('colorOdd'),
}

console.dir(buttons.even);

buttons.even.addEventListener('click', testCallback );
buttons.odd.addEventListener('click', colorElements('odd') );

var colorInputNode = document.querySelector('input[type="color"]');
console.log(`####colorInputNode: ${colorInputNode}`);

function getUserColor(node) {
  return node.value;
}

function pushLiNodes(type, liNodes) {
  if (!liNodes[type].length) {
    liNodes[type].push(...document.querySelectorAll(selectors[type]));
  }
  // console.dir(liNodes);
}

function setBgColor(nodesArr, color) {
  for (let i = 0, len = nodesArr.length; i < len; i++) {
    nodesArr[i].style.backgroundColor = color;
  }
}

function colorElements(type) {
  pushLiNodes(type, liNodes);

console.log(`colorInputNode: ${colorInputNode}`);
  var color = getUserColor(colorInputNode);

  liNodes[type].forEach(function(el) {
    el.style.backgroundColor = color;
  });
}


function testCallback(){
	console.log(`The test is OK`);
}
