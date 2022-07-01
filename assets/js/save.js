document.querySelector("#entryForm").onsubmit = ()=>{

  	let formData = new FormData(); 
  	formData.append('coolKey', 'abc123');
  
	fetch('models/save.php', {
		method: 'POST',
		body: formData
	})
	.then(response => response.json())
	.then(result => {
		console.log('Success:', result);
	});

	return false;
};