// 1. Yöntem
const okul = {
    isimler: ['hazal', 'niran', 'bahadır'],
    ids: [1432, 2432, 3545],
    ogrencileriYazdir() {
        const that = this;
        this.isimler.forEach(function(isim, index){
            console.log(that);
            console.log(isim, that.ids[index]);
        });
    },
    idleriYazdir() {
        this.ids.forEach(function (ids, index) {
            console.log(id);
            console.log(this);
        });
    }
}
okul.ogrencileriYazdir();

// 2. Yöntem
const okul2 = {
    isimler: ['hazal', 'niran', 'bahadır'],
    ids: [1432, 2432, 3545],
    ogrencileriYazdir() {
        const that = this;
        this.isimler.forEach(function(isim, index){
            console.log(that);
            console.log(isim, that.ids[index]);
        });
    },
    idleriYazdir() {
        this.ids.forEach(function (ids, index) {
            console.log(id);
            console.log(this);
        }.bind(this));
    }
}
okul2.ogrencileriYazdir();



console.log("************* 4. Arrow *************");