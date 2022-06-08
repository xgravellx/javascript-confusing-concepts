
function fonksiyon() {
    console.log(this);
}
fonksiyon();

// arrow function 
const fonksiyon1 = () => {
    console.log(this);
}
fonksiyon1();

/* Her iki fonsiyonda aynı çıktıyı verdi, fakat farklı nedenlerden dolayı
Normal fonksiyonda this obj tanımlıdır. O yüzden window obj tetikler.
Arrow Func this obj tanımlı değildir, kendi içerisinde this bulunmadığı için parentına gider ve bakar onda tanımlı olduğu için window obj çıktısını verir.
arrow func larda this olmadığı gibi bind, call vs. de yoktur, yani arrow func metod olarak kullanışlı değildir
*/









console.log("************* 4. Arrow *************");