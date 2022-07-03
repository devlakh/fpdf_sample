function getProducts(_formData)
{
	fetch('models/getProducts.php', {
		method: 'POST'
	})
	.then(response => response.json())
	.then(results => {
		
		// Placeholder Option
		let elem = document.createElement("option");
		elem.innerText = "---Select Option---";

		elem.onclick = ()=>{
			elem.innerText = "---Select Option---";
			_formData.append('coolKey', -1);
		}
		document.querySelector("#productList").append(elem);

		// Options From Database
		results.forEach(result => {
			let elem = document.createElement("option");
			elem.innerText = result.name;

			elem.onclick = ()=>{
				elem.innerText = result.name;
				_formData.append('coolKey', result.id);
			}

			document.querySelector("#productList").append(elem);
		});

	});
}