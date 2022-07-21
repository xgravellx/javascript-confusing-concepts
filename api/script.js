const btnTextGetir = document.getElementById('btn-text-get');
const btnJSONGetir = document.getElementById('btn-json-data-add');
const btnApidenJSONGetir = document.getElementById('btn-api-json-get');

btnTextGetir.addEventListener('click', getText);
btnJSONGetir.addEventListener('click', getJSON);
btnApidenJSONGetir.addEventListener('click', getJSONfromAPI);

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
        cikti += `<p>${user.name}<p>`
    });
    sonucDiv.innerHTML = cikti;
}