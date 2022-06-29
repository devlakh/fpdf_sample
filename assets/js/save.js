async function save()
{
    var response = await fetch('models/save.php', {
        method: 'POST',
        headers: {'Content-Type': 'application/json',},
        body: JSON.stringify({coolKey:"value1"}),
    });

    response = response.json();

    response.then((data)=>{
        console.log(data);
    });
}