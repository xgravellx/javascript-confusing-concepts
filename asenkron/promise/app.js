const myPromise = new Promise((resolve, reject) => {
    
    // uzun sürecek işlem
    setTimeout(() => {
        /* console.log("3 saniyelik işlem bitti"); */
        resolve("3 saniyelik işlem bitti")
    }, 3000);

    setTimeout(() => {
        reject("hata mesajı");
    }, 3000);
});

myPromise.then(sonuc => {console.log(sonuc);})
myPromise.catch(hata => {console.log(hata);})