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

let currentAchievementIndex = 0;
const achievementsList = document.getElementById('achievements-list').querySelectorAll('li');

function showAchievement(index) {
    const translateValue = -index * 100 + '%';
    document.getElementById('achievements-list').style.transform = 'translateX(' + translateValue + ')';
    currentAchievementIndex = index;
}

function nextAchievement() {
    currentAchievementIndex = (currentAchievementIndex + 1) % achievementsList.length;
    showAchievement(currentAchievementIndex);
}

function prevAchievement() {
    currentAchievementIndex = (currentAchievementIndex - 1 + achievementsList.length) % achievementsList.length;
    showAchievement(currentAchievementIndex);
}

// Автоматическая смена достижений
setInterval(nextAchievement, 5000); // Менять каждые 5 секунд
