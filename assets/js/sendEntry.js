function sendEntry(_form)
{
    fetch('models/sendEntry.php', {method: 'POST', body: _form })
    .then(response => response.json())
    .then(results => {
        console.log('results', results);
    });
}