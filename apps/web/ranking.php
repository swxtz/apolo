<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ranking</title>
    <link rel="stylesheet" href="ranking.css">
</head>
<body>
<div class="container">
    <div class="title">
        <h1>Ranking</h1>
    </div>
    <div class="positions" id="positions">
       
    </div>
</div>

<script>
    document.addEventListener('DOMContentLoaded', () => {
        fetch('api_url')
            .then(response => response.json())
            .then(data => {
                const positionsContainer = document.getElementById('positions');

                data.forEach(entry => {
                    const rankDiv = document.createElement('div');
                    rankDiv.classList.add('rank');

                    const nameSpan = document.createElement('span');
                    nameSpan.textContent = entry.name;

                    const scoreSpan = document.createElement('span');
                    scoreSpan.textContent = entry.score;

                    rankDiv.appendChild(nameSpan);
                    rankDiv.appendChild(scoreSpan);

                    positionsContainer.appendChild(rankDiv);
                });
            })
            .catch(error => {
                console.error('Erro ao buscar os dados:', error);
            });
    });
</script>
</body>
</html>
