const commentsWrapper = document.querySelector(".clients-reviews");

function renderComments(comments) {
    comments.forEach(item => {
        const comment = document.createElement("div");
        comment.innerHTML = `
            <div class="comment-person">
                <div class="comment-name">Имя: ${item.name}</div>
                <div class="comment-body">Комментарий: ${item.body}</div>
            </div>
        `;
        commentsWrapper.insertAdjacentHTML("beforeend", comment.innerHTML);
    });
}

// Показать уведомление
const showNotification = (message, type = 'success') => {
    toastr[type](message);
};

// Показать loader перед запросом
showNotification('Loading...');

fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(allComments => {
        // Получаем 10 случайных комментариев
        const randomComments = Array.from({ length: 10 }, () => {
            const randomIndex = Math.floor(Math.random() * allComments.length);
            return allComments[randomIndex];
        });

        renderComments(randomComments);
        // Скрыть loader после успешного запроса
        showNotification('Data loaded successfully');
    })
    .catch((error) => {
        console.error('Error:', error);
        showNotification(`Error: ${error}`, 'error');
    });