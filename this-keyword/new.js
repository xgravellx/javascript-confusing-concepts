// new binding

const Araba = function (renk, model) {
    this.renk = 'benim rengim' + renk;
    this.model = model;
    this.bilgiler = function() {
        console.log(this.renk);
        console.log(renk);
    }
}

const honda = new Araba("kırmızı", "civic");
honda.bilgiler();







console.log("*****3.New*****");