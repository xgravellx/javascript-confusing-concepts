const btnTextGetir = document.getElementById('btn-text-get');
const btnJSONGetir = document.getElementById('btn-json-get');
const btnApidenJSONGetir = document.getElementById('btn-api-json-get');
const btnJSONadd = document.getElementById('btn-json-data-add');

btnTextGetir.addEventListener('click', getText);
btnJSONGetir.addEventListener('click', getJSON);
btnApidenJSONGetir.addEventListener('click', getJSONfromAPI);
btnJSONadd.addEventListener('click', jsonAddData);

const sonucDiv = document.getElementById('sonuc');

function getJSON(e) {
    
}

function getText(e) {
    
}

function getJSONfromAPI(e) {
    e.preventDefault();

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(sonucx => ekranaYazdir(sonucx))
}

function ekranaYazdir(data) {
    let cikti = '';
    data.forEach(user => {
        cikti += `<span>${user.name}<span><br>`
    });
    sonucDiv.innerHTML = cikti;
}

function jsonAddData(e) {
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
        .then(sonucx => console.log(sonucx));
}