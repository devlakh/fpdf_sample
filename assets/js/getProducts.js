(()=>{
	fetch('models/getProducts.php', {
		method: 'POST'
	})
	.then(response => response.json())
	.then(result => {

		result.forEach(elem => {
			document.querySelector("#productList").innerHTML += "<option>"+elem.name+"</option>";
			console.log(elem.id);
		});
		// console.log(result);
	});
})();

document.querySelector("#productList").onchange = ()=>{
	
};