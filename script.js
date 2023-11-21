// Пример данных для ресурсов (может быть получено с сервера или других источников)
let resourcesData = [
    { name: 'MDN Web Docs', link: 'https://developer.mozilla.org/' },
    { name: 'GitHub', link: 'https://github.com/' },
    // Добавьте дополнительные ресурсы по вашему усмотрению
];

// Функция для отображения ресурсов
function displayResources() {
    const resourcesList = document.getElementById('resources-list');

    resourcesData.forEach(resource => {
        const resourceElement = document.createElement('div');
        resourceElement.classList.add('resource');

        const nameElement = document.createElement('h3');
        nameElement.textContent = resource.name;

        const linkElement = document.createElement('a');
        linkElement.href = resource.link;
        linkElement.textContent = resource.link;
        linkElement.target = '_blank'; // Открывать в новой вкладке

        resourceElement.appendChild(nameElement);
        resourceElement.appendChild(linkElement);
        resourcesList.appendChild(resourceElement);
    });
}

// Функция для добавления нового ресурса
function addResource() {
    const resourceName = document.getElementById('resource-name').value;
    const resourceLink = document.getElementById('resource-link').value;

    if (resourceName && resourceLink) {
        const newResource = { name: resourceName, link: resourceLink };
        resourcesData.push(newResource);

        // Очистка формы
        document.getElementById('resource-form').reset();

        // Очистка списка и повторное отображение
        document.getElementById('resources-list').innerHTML = '';
        displayResources();
    } else {
        alert('Заполните все поля формы.');
    }
}

// Загрузка и отображение ресурсов при загрузке страницы
window.onload = displayResources;
