document.addEventListener("DOMContentLoaded", function() {
    let score = 0; // Contador de acertos
    let numQuestions = 0; // Contador de questões

    // Função para gerar números aleatórios
    function generateRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Exibir a pergunta
    const questionElement = document.getElementById("question");
    const scoreElement = document.getElementById("score");
    const popupScoreElement = document.getElementById("popupScore");

    // Função para reiniciar o jogo
    function restartGame() {
        score = 0;
        numQuestions = 0;
        scoreElement.textContent = score;
        document.getElementById("popup").style.display = "none";
        handleNewQuestion();
    }

    // Função para lidar com uma nova pergunta
    function handleNewQuestion() {
        // Gerar novos números e atualizar a pergunta
        const num1 = generateRandomNumber(1, 10);
        const num2 = generateRandomNumber(1, 10);
        const correctAnswer = num1 * num2;
        questionElement.textContent = "Qual é o resultado de " + num1 + " x " + num2 + "?";
        // Limpar as alternativas antigas
        const alternativesElement = document.getElementById("alternatives");
        alternativesElement.innerHTML = "";
        // Gerar novas alternativas
        const alternatives = [correctAnswer];
        while (alternatives.length < 4) {
            const randAnswer = generateRandomNumber(1, 100);
            if (randAnswer !== correctAnswer && !alternatives.includes(randAnswer)) {
                alternatives.push(randAnswer);
            }
        }
        // Embaralhar as alternativas
        alternatives.sort(() => Math.random() - 0.5);
        // Exibir as novas alternativas
        alternatives.forEach(function(newAlternative) {
            const newButton = document.createElement("button");
            newButton.textContent = newAlternative;
            newButton.className = "alternative";
            newButton.addEventListener("click", function() {
                handleButtonClick.call(this, newAlternative, correctAnswer);
            });
            alternativesElement.appendChild(newButton);
        });
    }

    // Função para lidar com o clique nos botões de alternativa
    function handleButtonClick(alternative, correctAnswer) {
        if (alternative === correctAnswer) {
            this.classList.add("correct");
            document.getElementById("result").textContent = "Correto!";
            score++; // Incrementar o contador de acertos
            scoreElement.textContent = score; // Atualizar a pontuação exibida
        } else {
            this.classList.add("incorrect");
            document.getElementById("result").textContent = "Incorreto. A resposta correta era: " + correctAnswer;
            // Pop-up indicando o total de pontos e opção de reiniciar
            setTimeout(function() {
                const popup = document.getElementById("popup");
                popup.style.display = "block";
                popupScoreElement.textContent = score;
            }, 500); // Aguardar 500ms antes de exibir o pop-up
        }
        numQuestions++; // Incrementar o contador de questões
        // Habilitar todos os botões após a escolha
        document.querySelectorAll(".alternative").forEach(btn => {
            btn.disabled = false;
        });
        handleNewQuestion();
    }

    // Gerar a primeira pergunta
    handleNewQuestion();

    // Lidar com o clique no botão "Reiniciar"
    document.getElementById("restartButton").addEventListener("click", restartGame);
});
