//tyt den puan hessaplama aracı yapıcam 
let turkceDogru, turkceYanlis = 0;
let matematikDdogru, matematikYanlis = 0;
let sosyalDoru, sosyalYanlis = 0;
let fenDogru, fenYanlis = 0;
let okulpuanı = 0;




let yeniSatır = "\r\n";
let mesaj = "TYT paun hesaplama uygulamasına goşgeldiniz." + yeniSatır + "1-Puan hesapla" + yeniSatır + "2-Çıkış yap";

//kullanıcıdan aldığın değerleri hesaplayacağın için number tipine çevirmen gerek.
switch (secim) {
    case 1:
        okulpuanı = number(prompt("okul punanınızı giriniz:"));


        turkceDogru = number(prompt("Türkçe doğru sayınızı giriniz:"));
        turkceYanlis = number(prompt("Türkçe yanlış sayınızı giriniz:"));

        matematikDdogru = number(prompt("matematik doğru sayınızı giriniz:"));
        matematikYanlis = number(prompt("matematik yanlış sayınızı giriniz:"))

        sosyalDoru = number(prompt("sosyal doğru sayınızı giriniz:"));
        sosyalYanlis = number(prompt("sosyal yanlış sayınızı giriniz:"));

        fenDogru = number(prompt("fen doğru sayınızı giriniz:"));
        fenYanlis = number(prompt("fen yanlış sayınızı giriniz:"));



        let dogruNet = turkceDogru + matematikDdogru + sosyalDoru + fenDogru;
        let yanlisYanlis = turkceYanlis + matematikYanlis + sosyalYanlis + fenYanlis;
        let kalanDoruSaysisi = dogruNet - (yanlisYanlis / 4);
        puan = (kalanDoruSaysisi * 4) + 100 + okulpuanı;
        alert("tyt puanınız:");
        //burda amaç tam net sayıyı bulmaktır.matık aynı mantık 



        break;
    case 2:
        alert("uygulamadan çıkış yapınız.")
        break
    default:
        alert("lütfen geçerli bir değer giriniz.")//bu da zaten girdiğin değerler geçersiz olduğu zaman default çıkıyor.
        break;
}


///for döngüsü örneği yapalıö birlikte 
for (let i = 1; i <= 10; i++) {
    console.log(i);
    //bu döngü 1 den artıra artıra 10 a kadar ilerler.
}

//ikişer ikiişer de göterebilirsin bunları nasıl olur söyle yapalım 
for (let i = 0; i <= 10; i = i + 2) {
    console.log(i); //bu döngü böyle geçer 

}

//birden ona kadar tek kodları yazdırma da şöyle olur 
for (let i = 0; i <= 10; i++) {
    if (i % 2 == 1) {
        console.log("enes"); //i nin ikiye blümünden kalan tekse enes ismini yazdır çifse eğer naber yazdır.
    }
    else {
        console.log("naber");
    }
}


//50 den başlayarak 1 e kadar toplamlarını bulalım 
let toplam = 0;
for (let i = 50; i >= 1; i--) {
    toplam = toplam + i;
    console.log(i);
}
console.log("toplam:", toplam);





