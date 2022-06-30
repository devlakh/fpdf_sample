function getProducts()
{   
    fetch('models/save.php', {method: 'POST'})
    .then(response => response.json())
    .then(result => {
      console.log('Success:', result);
    })
    .catch(error => {
      console.error('Error:', error);
    });
}