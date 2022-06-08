console.log(sayi);

function a() {
    var sayi = 10;
    b();
    console.log(sayi);
}

function b() {
    var sayi = 20;
    c();
    console.log(sayi);
}

a();

function c() {
    console.log(sayi);
    var sayi = 30;
}

var sayi = 40;



