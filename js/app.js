var clickValue = document.getElementById("click-count");
var count = clickValue.innerHTML;
//var catPic = document.getElementById("cat-pic-elem"); // for Requirement 1

var imageDiv = document.getElementById("image");

/*
 -- Below for working as per requirement 1
 - */
// catPic.addEventListener("click", function(){
// 	console.log("Count value " + count);
// 	count = parseInt(count) + 1;
// 	clickValue.innerHTML = count;

// }, false);


/*
-----Below for requirement 2
*/
imageDiv.addEventListener("click", function(e){
	if(e.target.nodeName == "IMG"){
		count = parseInt(count)+1;
		clickValue.innerHTML = count;
	}
})


// document.addEventListener('change', function(){
// 	let inputRadio = document.querySelectorAll('input');
	
// })

document.addEventListener('change', function(){
	const allInputs = document.querySelectorAll('input');
	allInputs.forEach(function(elem){
		if(elem.checked){
			let catPic = document.querySelector('#'+elem.value + '-img');
			catPic.classList.toggle('hide');
		}
		//catPic.classList.toggle()
	})
})