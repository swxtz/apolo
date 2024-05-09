<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jogo de Multiplicação</title>
    <link rel="stylesheet" href="nameForm.css">
</head>
<body>  
    <div class="container">
        <h1>Jogo de Multiplicação</h1>
        <form id="nameForm">
                <label for="nome">Por favor, insira seu nome:</label>
                <input type="text" id="nomeid" name="nome" maxlength="50" required>
                <button onclick="Go()">  Iniciar Jogo </a> </button>
        </form> 
    </div>
    <script src="script.js"></script>
    <script>
    function submitUserName() {
        const userName = document.getElementById('userName').value;

        if (userName.trim() === '') {
            alert('Por favor, digite seu nome.');
            return;
        }

        fetch('URL_DO_SEU_ENDPOINT', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: userName })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao enviar o nome do usuário.');
            }
            return response.json();
        })
        .then(data => {
            console.log('Nome do usuário enviado com sucesso:', data);
            
        })
        .catch(error => {
            console.error('Erro ao enviar o nome do usuário:', error);
            
        });
    }
</script>
</body>
</html>   




