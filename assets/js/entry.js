(()=>{

	getProducts();

	function getTotal(_arg1, _arg2)
	{
		document.querySelector("[data-totalPrice]").innerHTML	 = document.querySelector("[data-quantity]").value * document.querySelector("[data-unitPrice]").value;
		console.log("FUCK");
	}
	document.querySelector("[data-quantity]").onclick = getTotal;
	document.querySelector("[data-quantity]").onkeyup = getTotal;
	document.querySelector("[data-unitPrice]").onclick = getTotal;
	document.querySelector("[data-unitPrice]").onkeyup = getTotal;

	function collectForm()
	{
		let form = new FormData();
		form.append("name" , document.querySelector("[data-customerName]").value);
		form.append("product" , document.querySelector("[data-productList]").value);
		form.append("quantity" , document.querySelector("[data-quantity]").value);
		form.append("price" , document.querySelector("[data-unitPrice]").value);

		return form;
	}

	document.querySelector("[data-btnSaveForm]").onsubmit = ()=>{
		console.log("Save");
		
		sendEntry(collectForm());
		
		return false;
  	};

	document.querySelector("[data-btnSaveAndPrintForm]").onsubmit = ()=>{
		return false;
		console.log("Save and Print");

		sendEntry(collectForm());
		
		window.location.href = "?page=landing";
		return false;
  	};
  
})();