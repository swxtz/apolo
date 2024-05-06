<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jogo de Multiplicação</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>Jogo de Multiplicação</h1>
        <p id="question"></p>
        <div id="alternatives"></div>
        <p id="result"></p>
        <div id="score">Pontuação: <span id="scoreValue">0</span></div>
        <div id="popup">
            <p>Você fez <span id="popupScore"></span> ponto(s)! Deseja reiniciar o jogo?</p>
            <button id="restartButton">Reiniciar</button>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>
