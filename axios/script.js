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
btnHata.addEventListener('click', dataHata);

function dataGet() {
    console.log("get data");
}

function dataPost() {
    console.log("post data");
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
            <div class='column'><h1 class"title">${response}</h1></div>
        </div>
    </div>
    
    <div class="section">
        <article class="message is-success">
            <div class="message-header">
                <p>Header</p>
            </div>
            <div class="message-body has-background-white has-text-dark">
                ${response.headers}
            </div>
        </article>
    </div>

    <div class="section">
        <article class="message is-success">
            <div class="message-header">
                <p>Data</p>
            </div>
            <div class="message-body has-background-white has-text-dark">
                ${response.data}
            </div>
        </article>
    </div>

    <div class="section">
        <article class="message is-success">
            <div class="message-header">
                <p>Config</p>
            </div>
            <div class="message-body has-background-white has-text-dark">
                ${response.config}
            </div>
        </article>
    </div>
    `
}
