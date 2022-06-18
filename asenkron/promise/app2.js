function ogrencileriGetir() {
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dizi = [];

            for (let i = 0; i < 10; i++) {
                dizi.push({ad: "ogrenci" + (i + 1), id: i+1});
            }

            resolve(dizi);
        }, 2000);
    })
}

function ogrencileriYazdir(dizi) {
    console.log((dizi));
}

/* ogrencileriGetir().then(ogrenciDizisi => {console.log(ogrenciDizisi)}); */
ogrencileriGetir().then(ogrenciDizisi => ogrencileriYazdir(ogrenciDizisi));
