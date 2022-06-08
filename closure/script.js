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