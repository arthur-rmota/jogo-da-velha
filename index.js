const confirmar = document.getElementById("confirmar");

confirmar.addEventListener("click", () => {
    const jogador1 = document.getElementById("player1").value.trim();
    const jogador2 = document.getElementById("player2").value.trim();

    if (!jogador1 || !jogador2) {
        alert("Preencha o nome dos dois jogadores!");
        return;
    }

    // Salva os nomes no localStorage
    localStorage.setItem("jogador1", jogador1);
    localStorage.setItem("jogador2", jogador2);

    // Redireciona para a página do jogo
    window.location.href = "game.html";
});