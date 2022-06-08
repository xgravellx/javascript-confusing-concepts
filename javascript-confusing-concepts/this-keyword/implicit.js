// 1. Implicit binding: fonksiyonun çağrıldığı noktanın solunda ne varsa this onu temsil eder.
// Fonksiyonun solunda obj olduğu için this onu temsil eder, eğer yoksa this window u belirtir.

// obcject literal
const hazal = {
    ad: 'hazal',
    yas: 23,
    adimiSoyle: function () {
        console.log(this);
        console.log(this.ad);
    },
    yasimiSoyle() {
        console.log(this);
        console.log(this.yas);
    }
}

const niran = {
    ad: 'niran',
    yas: 21,
    adimiSoyle: function () {
        console.log(this);
        console.log(this.ad);
    },
    yasimiSoyle() {
        console.log(this);
        console.log(this.yas);
    }
}

hazal.adimiSoyle();
niran.adimiSoyle();

// 1. yol
const adSoyle = function () {
    console.log(this);
    console.log(this.yas);
}
adSoyle();

// 2. yol
const adSoyle2 = hazal.adimiSoyle;
adSoyle2();


// Fonksi