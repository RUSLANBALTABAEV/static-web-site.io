function animateService(element) {
    element.classList.add('animated');
    setTimeout(() => {
        element.classList.remove('animated');
    }, 300);
}

function showService(serviceId) {
    // Скрываем все услуги
    const allServices = document.querySelectorAll('.service-content');
    allServices.forEach(service => {
        service.classList.remove('active');
    });

    // Показываем выбранную услугу
    const selectedService = document.getElementById(serviceId);
    selectedService.classList.add('active');
}

let currentIndex = 0;
const achievementItems = document.querySelectorAll('.achievement-item');

function showAchievement(index) {
    achievementItems.forEach((item, i) => {
        item.classList.toggle('hidden', i !== index);
    });
}

function nextAchievement() {
    currentIndex = (currentIndex + 1) % achievementItems.length;
    showAchievement(currentIndex);
}

function prevAchievement() {
    currentIndex = (currentIndex - 1 + achievementItems.length) % achievementItems.length;
    showAchievement(currentIndex);
}

function toggleContent(sectionId) {
    const section = document.getElementById(sectionId);
    section.classList.toggle('hidden');
}


// Автоматическая смена достижений
setInterval(nextAchievement, 5000); // Менять каждые 5 секунд

// Открывает всплывающее окно
function openPopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "block";
}

// Закрывает всплывающее окно
function closePopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "none";
}

// Добавляет обработчик события для открытия всплывающего окна при клике на элемент
document.querySelector(".serukopsa-lebtum").addEventListener("click", openPopup);

document.addEventListener("DOMContentLoaded", function () {
    // Автоматическая смена достижений
    setInterval(nextAchievement, 5000); // Менять каждые 5 секунд

    // Открывает всплывающее окно
    function openPopup() {
        var popup = document.getElementById("popup");
        popup.style.display = "block";
    }

    // Закрывает всплывающее окно
    function closePopup() {
        var popup = document.getElementById("popup");
        popup.style.display = "none";
    }

    // Добавляет обработчик события для открытия всплывающего окна при клике на элемент
    document.querySelector(".serukopsa-lebtum").addEventListener("click", openPopup);

    // Скрываем/показываем раздел достижений по клику
    document.getElementById("achievements").addEventListener("click", function () {
        toggleContent("achievements-list");
    });

    // Скрываем/показываем раздел обо мне по клику
    document.getElementById("about-me").addEventListener("click", function () {
        toggleContent("about-me-content");
    });
});

function submitFeedback() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Здесь вы можете выполнить отправку данных на сервер, например, через AJAX или другим способом.

    // Просто закроем всплывающее окно в качестве примера.
    closePopup();
}
