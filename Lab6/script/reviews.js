// Получаем ссылку на элемент с классом "clients-reviews"
const commentsWrapper = document.querySelector(".clients-reviews");
const commentTemplate = document.getElementById('commentTemplate');
// Изменение параметра positionClass
toastr.options.positionClass = 'toast-bottom-left';

function renderComments(comments) {
    hidePreloader()
    comments.forEach(item => {
        // Клонируем шаблон комментария
        const comment = document.importNode(commentTemplate.content, true);

        // Заполняем значения комментария
        comment.querySelector('.comment-name-value').textContent = item.name;
        comment.querySelector('.comment-body-value').textContent = item.body;

        // Добавляем комментарий в обертку
        commentsWrapper.appendChild(comment);
    });
}

function hidePreloader() {
    // Найти элемент прелоадера
    const preloader = document.querySelector(".preloader");

    // Скрыть прелоадер (изменить стиль или удалить элемент)
    preloader.style.display = "none";
    // preloader.remove(); // или удалить элемент из DOM
}

// Объявляется функция showNotification, которая использует библиотеку toastr для отображения уведомлений
const showNotification = (message, type = 'success') => {
    toastr[type](message);
};

// Показать loader перед запросом
showNotification('Loading...');

const randomId = Math.floor(Math.random() * 100) + 1;

// Выполняется HTTP-запрос к API JSONPlaceholder для получения списка комментариев
fetch(`https://jsonplaceholder.typicode.com/posts/${randomId}/comments`)
    // Обработка успешного ответа, преобразование его в формат JSON
    .then(response => response.json())
    // Обработка JSON-данных (всех комментариев), выполнение следующего кода при успешном выполнении
    .then(randomComments => {
        renderComments(randomComments);
        // Скрыть loader после успешного запроса
        showNotification('Data loaded successfully');
    })
    .catch((error) => {
        console.error('Error:', error);
        showNotification(`Error: ${error}`, 'error');
    });

// Прочитать про обработку микрозадач ( catch )