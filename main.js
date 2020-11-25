const binary = document.getElementById('binary');
const submit = document.getElementById('submit');

function binaryNum(e){
	e.preventDefault();

	const numb = document.getElementById('number').value;

	if(numb === ''){
		alert('Please enter a number');
	}
	else if (numb < 0) {
		alert('Please enter a positive number');
	}
	else{
		binary.style.visibility = 'visible';
	}

	//converting number

	binaryNumber = Number(numb).toString(2);
	binary.innerText = binaryNumber;
}

submit.addEventListener('click', binaryNum);