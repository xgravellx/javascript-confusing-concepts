// Closure Ex-1

const sayilariTopla = () => {
  console.log("function başladı");
  const a = 20, b = 30;
  const c = 70;

  const topla = () => {
    console.log(`toplam ${a+b}`);
  }

  setTimeout(topla, 6000);
  console.log("function bitti");
}
sayilariTopla();


// closure 2
const sayacIslemleri = () => {
  console.log("fonksiyon başladı");
  let sayac = 0;

  const h1 = document.querySelector('h1');
  const h2 = document.querySelector('h2');

  h1.addEventListener('click', () => {
    sayac++;
    console.log(`arttır ${sayac}`);
  })

  h2.addEventListener('click', () => {
    sayac--;
    console.log(`azalt ${sayac}`);
  });
  console.log("function bitti");

}
sayacIslemleri();

// Kronometre uygulaması ile bir işlemin ne kadar sürdüğünü yazan program
function kronometreUygulamasi() {
  let baslangicZamani = Date.now();

  function nekadarSurdu() {
    let gecenZaman = Date.now() - baslangicZamani;
    console.log(`Geçen zaman ${gecenZaman} milisaniyedir`);
  }
  return nekadarSurdu;
}

const Kronometre = kronometreUygulamasi();

for (let i = 0; i < 500000; i++) {
  let gecici = Math.random() * 2000;
}

Kronometre();


// Closure Faydalari
// 1. Memory 2. Encapsulation