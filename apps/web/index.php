<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jogo de Multiplicação</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>''
    <div class="container" id="main-form">
        <h1>Jogo de Multiplicação</h1>
        <form id="nameForm" onsubmit="event.preventDefault(); submitUserName();">
                <label for="nome">Por favor, insira seu nome:</label>
                <input type="text" id="userName" name="nome" maxlength="50" required>
                <button type="submit">Iniciar Jogo</button>
        </form> 
    </div>

    <div class="container" id="game-container" style="display: none;">
        <h1>Jogo de Multiplicação</h1>
        <h2 id="question"></h2>
        <div id="alternatives"></div>
        <h2 id="result"></h2>
        <div id="score">Pontuação: <span id="scoreValue">0</span></div>
        <div id="popup">
            <p>Você fez <span id="popupScore"></span> ponto(s)! Deseja reiniciar o jogo?</p>
            <button id="restartButton">Reiniciar</button>
            <button onclick="redirecionar()"> <a href="ranking.php" > Ranking </a> </button> 
        </div>
    </div>

    <script src="script.js"></script>
    <script>
    function submitUserName() {
        const userName = document.getElementById('userName').value;
        const form = document.getElementById("main-form");
        const gameContainer = document.getElementById("game-container");

        if (userName.trim() === '') {
            alert('Por favor, digite seu nome.');
            return;
        }

        form.classList.add("hidden");
        gameContainer.style.display = "block";
    }
</script>
</body>
</html>
