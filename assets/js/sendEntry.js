function sendEntry()
{
    let form = new FormData();
    form.append("name" , document.querySelector("#customerName").value);
    form.append("product" , document.querySelector("#productList").value);
    form.append("quantity" , document.querySelector("#quantity").value);
    form.append("price" , document.querySelector("#unitPrice").value);

    fetch('models/sendEntry.php', {method: 'POST', body: form })
    .then(response => response.json())
    .then(results => {
        console.log('From (entry.php) :', results);
    });
}