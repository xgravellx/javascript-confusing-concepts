// asenkron çalışma mantığı

console.log("başladı");

setTimeout(function () {
    console.log("5 saniyelik işlem bitti");
}, 5000);

setTimeout(function () {
    console.log("0 saniyelik işlem bitti");
}, 0);

console.log("bitti");


// callback ile ilgili örnek

console.log("basladı");

ogrencileriGetir(ogrencileriYazdir);

console.log("bitt");

function  ogrencileriGetir(callback) {
    setTimeout(function () {
        const dizi = [];

        for (let i = 0; i < 30; i++) {
            dizi.push({ad: "ogrenci" + (i +1), id:i+1});
        }
        callback(dizi);
    }, 3000);
}

function ogrencileriYazdir(ogrencilerDizisi) {
    console.log(ogrencilerDizisi);
}