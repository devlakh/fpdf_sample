(()=>{	

	let formData = new FormData();
	formData.append('coolKey', 'init');

	document.querySelector("#entryForm").onsubmit = ()=>{
	
		fetch('models/entry.php', {
			method: 'POST',
			body: formData
		})
		.then(response => response.json())
		.then(result => {
			console.log('From (entry.php) :', result);
		});
	
		return false;
  	};

  getProducts(formData);
})();