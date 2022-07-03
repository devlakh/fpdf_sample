function getProducts(_formData){

	fetch('models/getProducts.php', {
		method: 'POST'
	})
	.then(response => response.json())
	.then(results => {

		results.forEach(result => {
			let elem = document.createElement("option");
			elem.innerText = result.name;
			elem.onclick = ()=>{
				console.log(result.id);
				_formData.append('coolKey', result.id);
			}
			document.querySelector("#productList").append(elem);
		});

	});

}