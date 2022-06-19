const btnAPIdenJSONgetir = document.getElementById('btn-api-json-get');
const btnJSONdataAdd = document.getElementById('btn-json-data-add');
const sonucDiv = document.getElementById('sonuc');

btnAPIdenJSONgetir.addEventListener('click', getJSONfromAPI);
btnJSONdataAdd.addEventListener('click', addJSONdata);

function getJSONfromAPI(e) {
    e.preventDefault();

    fetch ('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(sonuc => ekranaYazdir(sonuc));
}

function ekranaYazdir(data) {
    let cikti = '';
    data.forEach(user => {
        cikti += `<li>${user.name}</li>`
    });
    sonucDiv.innerHTML = cikti;
}

function addJSONdata(e) {
    e.preventDefault();

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'deneme',
            body: 'body alani',
            userId: 5
        }),
        headers: {'Content-Type': 'application/json'}
    })
        .then(response => response.json())
        .then(sonuc => console.log(sonuc));
}

// async await 
async function addJSONdata(e) {
    e.preventDefault();

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'deneme',
            body: 'body alani',
            userId: 5
        }),
        headers: {'Content-Type': 'application/json'}
    })
        .then(response => response.json())
        .then(sonuc => console.log(sonuc));
}
