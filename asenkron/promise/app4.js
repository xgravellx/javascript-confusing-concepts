// async await

console.log("************************");

function getUser(id) {
    console.log(`${id} idli kullanıcının bilgilsi getiriliyor.`);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ad: 'hazal', id: id});
        }, 2000);
    });
}

function getCourses(userName) {
    console.log(`${userName} isimli kullanıcının kursları getiriliyor`);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(['java', 'js', 'flutter']);
        }, 2000);
    });
}

function getComments(kursAdi) {
    console.log(`${kursAdi} isimli kursun yorumları getiriliyor`);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Kurs harika!!!!!!");
        }, 1000);
    });
}

// 1. YOL
/* getUser(12345).then(user => {
    getCourses(user.ad).then(kurslarDizisi => {
        console.log(kurslarDizisi);
    })
}); */

// 2. YOL
getUser(123456)
    .then(user => getCourses(user.ad))
    .then(kurslarDizisi => getComments(kurslarDizisi[0]))
    .then(yorum => console.log(yorum));


// 3. YOL
async function yorumlariGoster() {
    try {
        const userObject = await getUser(1321);
        const kurslarDizisi = await getCourses(userObject.ad);
        const yorum = await getComments(kurslarDizisi[0]);
        console.log(yorum);
    }
    catch (err) {
        console.log("hata çıktı" + err);
    }
    
}

console.log("************************");