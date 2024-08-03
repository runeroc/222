// JavaScript код починається тут
document.addEventListener('DOMContentLoaded', function() {
    var loginModal = document.getElementById('login-modal');
    var registerModal = document.getElementById('register-modal');
    var closeButtons = document.querySelectorAll('.close');
    var loginButton = document.getElementById('login-button');
    var registerButton = document.getElementById('register-button');

    loginButton.addEventListener('click', function(event) {
        event.preventDefault();
        loginModal.style.display = 'block';
    });

    registerButton.addEventListener('click', function(event) {
        event.preventDefault();
        registerModal.style.display = 'block';
    });

    closeButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            loginModal.style.display = 'none';
            registerModal.style.display = 'none';
        });
    });

    window.addEventListener('click', function(event) {
        if (event.target === loginModal || event.target === registerModal) {
            loginModal.style.display = 'none';
            registerModal.style.display = 'none';
        }
    });

    // Динамічне завантаження ігор
    var gamesContainer = document.getElementById('games-container');

    fetch('games.json') // Замініть на правильний шлях до JSON файлу
        .then(response => response.json())
        .then(data => {
            data.games.forEach(game => {
                var gameItem = document.createElement('article');
                gameItem.classList.add('game-item');
                
                gameItem.innerHTML = `
                    <img src="${game.image}" alt="${game.title}">
                    <h3>${game.title}</h3>
                    <p>${game.description}</p>
                    <a href="${game.downloadLink}">Завантажити</a>
                `;
                
                gamesContainer.appendChild(gameItem);
            });
        })
        .catch(error => console.error('Error loading games:', error));
});
document.addEventListener('DOMContentLoaded', function() {
    // Ваш існуючий код

    var commentForm = document.getElementById('comment-form');
    var commentList = document.getElementById('comment-list');

    commentForm.addEventListener('submit', function(event) {
        event.preventDefault();

        var name = document.getElementById('comment-name').value;
        var comment = document.getElementById('comment-text').value;

        addComment(name, comment);
    });

    function addComment(name, comment) {
        var commentItem = document.createElement('div');
        commentItem.classList.add('comment-item');
        commentItem.innerHTML = `
            <strong>${name}</strong>
            <p>${comment}</p>
        `;
        commentList.appendChild(commentItem);

        // Очистити форму
        commentForm.reset();
    }
});
document.addEventListener('DOMContentLoaded', function() {
    // Ваш існуючий код

    var categoryFilter = document.getElementById('category');

    categoryFilter.addEventListener('change', function() {
        var selectedCategory = categoryFilter.value;
        filterGames(selectedCategory);
    });

    function filterGames(category) {
        fetch('games.json') // Замініть на правильний шлях до JSON файлу
            .then(response => response.json())
            .then(data => {
                var filteredGames = data.games.filter(game => game.category === category || category === 'all');
                renderGames(filteredGames);
            })
            .catch(error => console.error('Error loading games:', error));
    }

    function renderGames(games) {
        gamesContainer.innerHTML = '';
        games.forEach(game => {
            var gameItem = document.createElement('article');
            gameItem.classList.add('game-item');
            
            gameItem.innerHTML = `
                <img src="${game.image}" alt="${game.title}">
                <h3>${game.title}</h3>
                <p>${game.description}</p>
                <a href="${game.downloadLink}">Завантажити</a>
            `;
            
            gamesContainer.appendChild(gameItem);
        });
    }
});

// JavaScript код закінчується тут
