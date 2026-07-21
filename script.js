// Yazılacak cümleler sırayla dizildi
const sentences = [
    "Seninle tanıştığımdan beri büyük ikramiyeyi kazanmış gibiyim...",
    "Şey, sana söyleyeceğim şey şuydu: çok tatlısın, bu kadar tatlı olunmaz ki, gözlerimi gözlerinden alamıyorum...",
    "Umarım beğenirsin senin için yaptım :)"
];

let sentenceIndex = 0;
let charIndex = 0;
const speed = 45; // Yazı yazılma hızı (milisaniye)
const textElement = document.getElementById("typedText");

function typeWriter() {
    if (sentenceIndex < sentences.length) {
        let currentSentence = sentences[sentenceIndex];
        
        if (charIndex < currentSentence.length) {
            textElement.innerHTML += currentSentence.charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, speed);
        } else {
            // Cümle bitti, sonraki cümleye geçmeden önce 2 saniye bekletip ekranı siliyoruz (ilk 2 cümle için)
            if (sentenceIndex < sentences.length - 1) {
                setTimeout(() => {
                    textElement.innerHTML = "";
                    charIndex = 0;
                    sentenceIndex++;
                    typeWriter();
                }, 2000); // Bekleme süresi
            }
        }
    }
}

// Sayfa açıldıktan 1 saniye sonra başlat
setTimeout(typeWriter, 1000);

// Arka plana rastgele parıltı efekti
function createSparkles() {
    const bg = document.getElementById('bgEffects');
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');
    sparkle.style.width = Math.random() * 4 + 2 + 'px';
    sparkle.style.height = sparkle.style.width;
    sparkle.style.left = Math.random() * window.innerWidth + 'px';
    sparkle.style.top = window.innerHeight + 'px';
    sparkle.style.animationDuration = Math.random() * 3 + 3 + 's';
    bg.appendChild(sparkle);

    setTimeout(() => {
        sparkle.remove();
    }, 6000);
}

setInterval(createSparkles, 300);
