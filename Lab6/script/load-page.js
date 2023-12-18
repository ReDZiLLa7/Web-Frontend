(() => {    function calculateLoadTime() {
    // Создаем метку для конечного времени загрузки страницы
    performance.mark('pageEnd');

    // Создаем метку для измерения времени между началом и концом
    performance.measure('pageLoad', 'navigationStart', 'pageEnd');

    // Получаем записи о производительности типа 'measure'
    const measures = performance.getEntriesByType('measure');

    // Находим запись о времени загрузки страницы
    const pageLoadTime = measures.find(measure => measure.name === 'pageLoad');

    // Возвращаем время загрузки страницы
    return pageLoadTime.duration;
}
    window.addEventListener('load', () => {
        const loadTime = document.createElement('div');
        loadTime.innerHTML = `Страница загрузилась за ${calculateLoadTime().toFixed(2)} мс`;
        document.querySelector('footer').appendChild(loadTime);
    });
})();