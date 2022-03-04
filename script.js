const input = document.getElementById("inputtext");
const enterButton = document.getElementById("enter");
const ul = document.querySelector("ul");

function inputLength(){
	return input.value.length;
}

function capitalizeFirstLetter(string){
	return input.value[0].toUpperCase() + input.value.slice(1).toLowerCase();
}

function createListElement(){
	const li = document.createElement("li");
	const p =document.createElement("p");
	p.appendChild(document.createTextNode(`${capitalizeFirstLetter(input.value)} `));
	const del = document.createElement("button");
	del.appendChild(document.createTextNode("Del"));
	del.setAttribute("class","delButton");
	li.appendChild(p);
	p.appendChild(del);
	ul.appendChild(li);
	input.value = ""; //清空input
}

function addListAfterClick(){
	if(inputLength()>0){
		createListElement();
	}
}

function addListAfterPressEnter(event){
	if(inputLength()>0 && event.keyCode === 13){
		createListElement();
	}
}

function toggleToDone(event){
  // 判斷目標元素若是 li 則執行toggleToDone
  if( event.target.tagName.toLowerCase() === 'p' ){
    event.target.classList.toggle("done");
  }
}

function deleteItem(event){
	if( event.target.className === 'delButton'){
		event.target.parentElement.parentElement.remove();
	}
}

enterButton.addEventListener("click",addListAfterClick);

input.addEventListener("keypress",addListAfterPressEnter);

ul.addEventListener('click', toggleToDone);

ul.addEventListener('click',deleteItem);


// 此方法無法讓新增的li也擁有addEventListner
// if (ul.hasChildNodes()){
// 	for (var i = 0; i < ul.children.length; i++){
// 		ul.children[i].addEventListener("click",toggleToDone);
// 	}
// }
// 經測試children和childNodes都可work;

// 1.切換.done
// 2.每個list加刪除鈕，一刪就沒有該list