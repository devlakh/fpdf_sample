function getProducts()
{
	fetch('models/getProducts.php', {
		method: 'POST'
	})
	.then(response => response.json())
	.then(results => {

		// Options From Database
		results.forEach(result => {
			let elem = document.createElement("option");
			elem.value = result.id;
			elem.innerText = result.name;

			document.querySelector("#productList").append(elem);
		});

	});
}