document.addEventListener("DOMContentLoaded", function() {
    let botao = document.getElementById("botao");
    let surpresa = document.getElementById("surpresa");
    let musica = document.getElementById("musica");
    let tentativas = 0;

    function moverBotaoDesktop() {
        if (tentativas >= 10) return;
        let x = Math.random() * (window.innerWidth - botao.offsetWidth);
        let y = Math.random() * (window.innerHeight - botao.offsetHeight);
        botao.style.left = ${x}px;
        botao.style.top = ${y}px;
        tentativas++;
    }

    function moverBotaoAndroid() {
        if (tentativas >= 10) return;
        let x = Math.random() * (window.innerWidth - botao.offsetWidth);
        let y = Math.random() * (window.innerHeight - botao.offsetHeight);
        botao.style.transform = translate(${x}px, ${y}px);
        tentativas++;
    }

    botao.addEventListener("mouseover", function() {
        if (/Android/i.test(navigator.userAgent)) {
            moverBotaoAndroid();
        } else {
            moverBotaoDesktop();
        }
    });

    botao.addEventListener("click", function(event) {
        event.stopPropagation();
        if (tentativas < 10) return;
        surpresa.classList.remove("hidden");
        musica.play();
        botao.style.display = "none";
    });

    // Criar animação de corações
    function criarCoracoes() {
        let coracao = document.createElement("div");
        coracao.className = "heart";
        coracao.innerHTML = "❤";
        coracao.style.left = ${Math.random() * 100}vw;
        document.body.appendChild(coracao);
        setTimeout(() => coracao.remove(), 4000);
    }

    setInterval(criarCoracoes, 500);
});