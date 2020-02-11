var listArray = [
	'Do something',
	'Repeat'
];

init();

// function getList() {
// 	var ul = document.getElementById('todo-list');

// }

var addBtn = document.getElementById('add-task');
addBtn.addEventListener('click', addTodo);

// function addTodo() {
// 	var addInput = document.getElementById('add-todo').value; 
// 	var ul = document.getElementById('todo-list');
// 	var newLi = document.createElement('li'); 
// 	var textNode = document.createTextNode(addInput);
// 	newLi.appendChild(textNode);
// 	ul.appendChild(newLi);
// 	return;
// }

function addTodo() {
	var addInput = document.getElementById('add-todo').value; 
	listArray.push(addInput);
	init();
	return;
}

function init() {
	var ul = document.getElementById('todo-list');
	
	var content = '';

	listArray.forEach(function(item){
		content += `<li>${item}</li>`;
		return;
	});

	ul.innerHTML = content;
	return;
}

