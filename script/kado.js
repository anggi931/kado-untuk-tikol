function kado(){
    
    var happyText = document.getElementById("happyText");
    var btnKado = document.getElementById('btnKado');
    btnKado.style.display = "none"; 
    var cp = document.getElementById("container-pict");
    cp.style.animation = "hilang 2s ease-out 2s forwards";
    var cp2 = document.getElementById("container-pict2");
    cp2.style.animation = "hilang 2s ease-out 1.5s forwards";
    var cp3 = document.getElementById("container-pict3");
    cp3.style.animation = "hilang 2s ease-out 1s forwards";
    setTimeout(function() {
        cp.style.display = "none";
        cp2.style.display = "none";  
        cp3.style.display = "none";  
        happyText.style.display = "none";  
        
        var fotostiker = document.getElementById("fotostiker");
        fotostiker.style.display = "block";  
      }, 3000);
      setTimeout(function() {
        var hai = document.getElementById("hai");
        hai.style.display = "block";  
      }, 4500);
      setTimeout(function() {
        var pesan = document.getElementById("cpsn");
        pesan.style.display = "block";  
        window.ityped.init(document.querySelector('.ityped'), {
            strings: [
                'Selamat ulang tahun yang ke 23 yaa 🥳',
                'Udah tua juga ya seng wkwk😅',
                'Semoga di tahun ini mu jadi pribadi yang lebih sering mandi',
                '(Eh kok, salah salah 😜)',
                'Semoga di tahun ini dan seterusnya mu menjadi pribadi yang lebih baik lagi, semua mimpimu bisa tercapai..',
                'kecuali mimpi semalem yang mu ceritain ya..',
                'Ga ga ga, Ga mau akuu 😡',
                'kurangin marahnya yaa',
                'tapi walaupun gitu aku masih sayang kok ❤️',
                '(bacoot)',
                'sekarang lagi musim hujan nih kurangin dulu volly nya yaa cantiik🥰',
            ],
            backSpeed: 50,
            backDelay: 3000,
            onFinished: function () {
                var pesan = document.getElementById('pesan');
                pesan.style.display = "none";
                var clast = document.getElementById('clast');
                clast.style.display = "block";
            },
        })
      }, 5000);
      setTimeout(function() {
        var fotostiker = document.getElementById("fotostiker");
        fotostiker.style.display = "none";  
        var fotostiker2 = document.getElementById("fotostiker2");
        fotostiker2.style.display = "block";  
      }, 15000);
      setTimeout(function() {
        var fotostiker2 = document.getElementById("fotostiker2");
        fotostiker2.style.display = "none";  
        var fotostiker3 = document.getElementById("fotostiker3");
        fotostiker3.style.display = "block";  
      }, 40000);
      setTimeout(function() {
        //kurangin
        var fotostiker3 = document.getElementById("fotostiker3");
        fotostiker3.style.display = "none";  
        var fotostiker4 = document.getElementById("fotostiker4");
        fotostiker4.style.display = "block";  
      }, 80000);
      setTimeout(function() {
        var fotostiker4 = document.getElementById("fotostiker4");
        fotostiker4.style.display = "none";  
        var fotostiker5 = document.getElementById("fotostiker5");
        fotostiker5.style.display = "block";  
      }, 100000);
      setTimeout(function() {
        var fotostiker5 = document.getElementById("fotostiker5");
        fotostiker5.style.display = "none";  
        var fotostiker6 = document.getElementById("fotostiker6");
        fotostiker6.style.display = "block";  
      }, 120000);



}