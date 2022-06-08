// 2. Exclicit Bindings
// call, bind, apply

const kemal = {
    ad: 'kemal',
    yas: 25,
    okul: 'ankara'
}

const ahmet = {
    ad: 'ahmet',
    yas: 22,
    okul: 'ege'
}

const bilgilerimiYazdir = function (...args) {
    console.log(this);
    console.log(`benim adım ${this.ad} yaşım ${this.yas} okulum ${this.okul}`);
    console.log(`sevdiğim renkler ${args}`);
}

bilgilerimiYazdir(); // solunda herhangi bir şey olmadıüı için window işaret edilir. Window içerisinde ad, yas, okul gibi değerler olmadığı için undefined sonucu verir.

// bilgilerimiYazdir.call(kemal, 'kirmizi', 'siyah'); 
bilgilerimiYazdir.apply(kemal, ['kırmızı', 'siyah', 'yeşil']);

// call parametreleri tek tek alırken 
// apply parametreleri dizi halinde alır.
// call ve apply çağırma işlemini yapar fakat bind yapmaz.

// bind değişken tanımlayıp çağırmak gerekir.
const cagir = bilgilerimiYazdir.bind(kemal, ['sari']);
cagir();



console.log("*****2. Exclicit*****");