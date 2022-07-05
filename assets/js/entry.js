(()=>{	

	let formData = new FormData();

	document.querySelector("#entryForm").onsubmit = ()=>{
	
		sendEntry();
	
		return false;
  	};

  getProducts();
  
})();