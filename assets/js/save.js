function save()
{
    fetch('models/save.php', {
        method: 'POST',
        headers: {
            'Content-Type': "application/json",
            "Accept":       "text/plain"
        },
        body: JSON.stringify({coolKey:"value1"}),
    })
    .then( response => response.json() )
    .then((data)=>{
        console.log("Success", data);
    })
    .catch((err)=>{
        console.log("Error", err);
    });
}