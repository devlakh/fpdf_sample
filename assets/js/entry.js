(()=>{	

	let formData = new FormData();

	document.querySelector("#entryForm").onsubmit = ()=>{
	
		fetch('models/entry.php', {
			method: 'POST',
			body: formData
		})
		.then(response => response.json())
		.then(results => {
			console.log('From (entry.php) :', results);
		});
	
		return false;
  	};

  getProducts(formData);
  
})();