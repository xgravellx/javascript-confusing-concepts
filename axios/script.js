const btnGet = document.getElementById('get');
const btnPost = document.getElementById('post');
const btnPutPatch = document.getElementById('put-patch');
const btnAyniAndaIstek = document.getElementById('ayni-anda-istek');
const btnHeaders = document.getElementById('headers');
const btnHata = document.getElementById('hata');

btnGet.addEventListener('click', dataGet);
btnPost.addEventListener('click', dataPost);
btnPutPatch.addEventListener('click', dataPutPatch);
btnAyniAndaIstek.addEventListener('click', AyniAndaIstek);
btnHeaders.addEventListener('click', dataHeaders);


function dataGet() {
    /* axios({
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/users',
        params: {
            _limit: 2
        }
    }).then(response => sonucuEkranaYazdir(response))
        .catch(hata => console.log(hata))
        .then(() => console.log('get isteği tamamlandı')) */

    
    axios('https://jsonplaceholder.typicode.com/users?_limit=1')
    .then(response => sonucuEkranaYazdir(response))
    .catch(hata => console.log(hata))
    .then(() => console.log('get isteği tamamlandı'))
}

function dataPost() {
    /* axios.post('https://jsonplaceholder.typicode.com/posts', {
        title: 'Yeni Başlık',
        body: 'Burası body kısmı',
        userId: 55
    }).then(response => sonucuEkranaYazdir(response))
        .catch(hata => console.log(hata)) */

    axios.post('https://jsonplaceholder.typicode.com/users', {
        id: 800,
        name: 'hazel',
        username:'xgravellx'
    }).then(response => sonucuEkranaYazdir(response))
        .catch(hata => console.log(hata));
}

function dataPutPatch() {
    console.log("put patch data");
}

function AyniAndaIstek() {
    console.log("aynı anda istek data");
}

function dataHeaders() {
    console.log("headers data");
}

function dataHata() {
    console.log("hata data");
}

function hatayiEkranaYazdir(error) {
    console.log(error);
    document.querySelector('.sonucy').innerHTML = `
    <div class='notification is-info'>
        <div class='colums is-mobile is-vcentered>
            <div class='column'><h1 class"subtitle">Sonuc</h1></div>
            <div class='column'><h1 class"title">${error}</h1></div>
        </div>
    </div>`
}

function sonucuEkranaYazdir(response) {
    document.querySelector('.sonucy').innerHTML = `
    <div class='notification is-info'>
        <div class='columns is-mobile is-vcentered>
            <div class='column'><h1 class"subtitle">Sonuc</h1></div>
            <div class='column'><h1 class"title">${response.status}</h1></div>
        </div>
    </div>
    
    <div class="section">
        <article class="message is-success">
            <div class="message-header">
                <p>Header</p>
            </div>
            <div class="message-body has-background-white has-text-dark">
                <pre>${JSON.stringify(response.headers, null, 4)}</pre>
            </div>
        </article>
    </div>

    <div class="section">
        <article class="message is-success">
            <div class="message-header">
                <p>Data</p>
            </div>
            <div class="message-body has-background-white has-text-dark">
                <pre>${JSON.stringify(response.data, null, 4)}</pre>
            </div>
        </article>
    </div>

    <div class="section">
        <article class="message is-success">
            <div class="message-header">
                <p>Config</p>
            </div>
            <div class="message-body has-background-white has-text-dark">
                <pre>${JSON.stringify(response.config, null, 4)}</pre>
            </div>
        </article>
    </div>`
}
