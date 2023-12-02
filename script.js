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
