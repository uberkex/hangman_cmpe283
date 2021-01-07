var kelime = ["D", "J", "A", "N", "G", "O"]

var tahmin = new Array(kelime.length);
var hataSayisi = 0;
    
// kelimemizdeki her harfi _ ile gösteriyoruz
for (var i = 0; i < tahmin.length; i++){
    tahmin[i] = "_ ";
}

   
// tahmin alanını html içerisinde gösteriyoruz.
function ekranaBas(){
    for (var i = 0; i < tahmin.length; i++){
    var sonuc = document.getElementById("guess-area");
    var harf = document.createTextNode(tahmin[i]);
    sonuc.appendChild(harf);
    }
}


const guessform = document.getElementById("guess-form");
guessform.addEventListener("submit",submitFunc);

function submitFunc(e){
    let letter_area = document.getElementById("letter-area");
    let letter_1 = letter_area.value.toUpperCase();
    console.log(letter_1);

    // girilen harf, bizim kelimemizin harflerinden biriyse _ yerine harf yazılacak.
    for(let i=0; i<kelime.length; i++){
        if(kelime[i] === letter_1){
            tahmin[i] = letter_1 + " ";
            
            // doğruysa true döndür, false ise o harfi incorrect kısmına ekleyeceğiz
            var is_true = true;
        }
        // letter-area input alanını temizle
        letter_area.value = "";
    }


    // Harf tahmini işleminden sonra ekrana yeni guess-area basılmalı
    // Doğru harf girdiysek _ yerine harfimiz gelecek
    var sonuc = document.getElementById("guess-area");
    sonuc.innerHTML = "";
    ekranaBas();


    // Yanlış harf girdiysek, bu harf incorrect kısmına( wrong-guess-area ) eklenecek
    if(!is_true){
        let wrong_guess_area = document.getElementById("wrong-guess-area");
        wrong_guess_area.appendChild(document.createTextNode(" "+ letter_1));
        // hata sayımızı 1 arttırmayı unutmayalım
        hataSayisi++;
    }


    // tahmin arrayimizin içinde _ var mı diye kontrol ediyoruz 
    // _ var ise kelimemizi doğru tahmin edememişiz demektir
    var is_win = true;
    for(let i=0; i<tahmin.length; i++){
        if(tahmin[i] === "_ "){
            is_win = false;
        }
    }

    if(is_win){
        alert("You win");
    }

    if(hataSayisi === kelime.length){
        alert("You lose");
    }
    
    
    // Aynı sayfada kalmamızı sağlıyor, form action özelliğini devre dışı bırakıyor
    e.preventDefault();
}
    


// Yüklendiği an fonksiyonu çalıştırıyor
window.onload = ekranaBas;