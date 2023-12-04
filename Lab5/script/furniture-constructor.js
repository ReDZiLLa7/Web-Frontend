// constructor.js

function generateKitchen() {
    // Получаем значения из формы
    const kitchenType = document.getElementById('kitchenType').value;
    const kitchenMaterial = document.getElementById('kitchenMaterial').value;
    const kitchenColor = document.getElementById('kitchenColor').value;

    // Создаем объект с параметрами кухни
    const kitchenParams = {
        kitchenType,
        counterMaterial: kitchenMaterial,
        cabinetColor: kitchenColor
    };

    // Получаем текущий массив из локального хранилища или создаем новый, если его нет
    const savedKitchens = JSON.parse(localStorage.getItem('kitchens')) || [];

    // Добавляем новый объект в массив
    savedKitchens.push(kitchenParams);

    // Сохраняем обновленный массив в локальное хранилище
    localStorage.setItem('kitchens', JSON.stringify(savedKitchens));

    // Генерируем результат (в данном случае, просто текст)
    const result = `Сборка: ${kitchenType}
    <br>
    Фасад: ${kitchenMaterial}
    <br>
    Цвет: ${kitchenColor}`;

    // Отображаем результат в контейнере
    document.getElementById('resultContainer').innerHTML = result;

    function displaySavedKitchens() {
        const savedKitchens = JSON.parse(localStorage.getItem('kitchens')) || [];
        const resultContainer = document.getElementById('resultContainer');
        resultContainer.innerHTML = '';

        savedKitchens.forEach((kitchen, index) => {
            resultContainer.appendChild(createKitchenElement(kitchen, index));
        });
    }

    function deleteKitchen(index) {
        const savedKitchens = JSON.parse(localStorage.getItem('kitchens')) || [];
        savedKitchens.splice(index, 1);
        localStorage.setItem('kitchens', JSON.stringify(savedKitchens));
        displaySavedKitchens();
    }

    function createKitchenElement(kitchen, index) {
        const kitchenDiv = document.createElement('div');
        kitchenDiv.className = 'saved-kitchen';

        const heading = document.createElement('h3');
        heading.textContent = `Кухня №${index + 1}`;
        kitchenDiv.appendChild(heading);

        const assemblyParagraph = document.createElement('p');
        assemblyParagraph.textContent = `Сборка: ${kitchen.kitchenType}`;
        kitchenDiv.appendChild(assemblyParagraph);

        const facadeParagraph = document.createElement('p');
        facadeParagraph.textContent = `Фасад: ${kitchen.counterMaterial}`;
        kitchenDiv.appendChild(facadeParagraph);

        const colorParagraph = document.createElement('p');
        colorParagraph.textContent = `Цвет: ${kitchen.cabinetColor}`;
        kitchenDiv.appendChild(colorParagraph);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Удалить';
        deleteButton.addEventListener('click', function () {
            deleteKitchen(index);
        });

        kitchenDiv.appendChild(deleteButton);

        return kitchenDiv;
    }

    displaySavedKitchens();
}
