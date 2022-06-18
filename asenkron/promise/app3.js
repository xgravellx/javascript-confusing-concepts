const promiseBasarili = Promise.resolve("başarılı promise");
const promiseBasarisiz = Promise.reject("başarısız promise");

promiseBasarili.then(snc => console.log(snc));
promiseBasarisiz.catch(snc => console.log(snc));


console.log("************************");

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("3 saniyelik işlem bitti");
    }, 3000);
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("4 saniyelik işlem bitti");
    }, 4000);
});

Promise.all([p1, p2]).then(sonuc => console.log(sonuc));

Promise.race([p1, p2]).then(sonuc => console.log(sonuc));