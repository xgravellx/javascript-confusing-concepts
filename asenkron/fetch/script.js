const btnTextGetir = document.getElementById('btn-text-get');
const btnJSONGetir = document.getElementById('btn-json-get');

btnTextGetir.addEventListener('click', getText);
btnTextGetir.addEventListener('click', getText2);

btnJSONGetir.addEventListener('click', getJSON);

const sonucDiv = document.getElementById('sonuc');

function getJSON(e) {
    e.preventDefault();
    
    fetch('ogrenciler.json')
        .then(response => response.json())
        .then(sonuc => {
            let cikti = '';
            sonuc.forEach(ogr => {
                cikti+= `ogrenci adi ${ogr.ad} id: ${ogr.id} \n`;
            });
            sonucDiv.innerHTML = cikti;
        });
}

// 1.YOL
function getText(e) {
    e.preventDefault();

    const fetchResult = fetch('deneme.txt');
    fetchResult.then((response) => {
        const responseText = response.text();
        responseText.then(result => {
            console.log(result);
        })
    })
    console.log(fetchResult);
}

// 2. YOL
function getText2(e) {
    e.preventDefault();

    fetch("deneme.txt")
        .then(response => response.text())
        .then(sonuc => sonucDiv.innerHTML= sonuc)
        .catch(hata => console.log(hata));
}