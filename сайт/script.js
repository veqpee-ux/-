// Находим форму на странице по её ID
const form = document.getElementById('contactForm');

// Добавляем обработчик события отправки формы
form.addEventListener('submit', function(event) {
    // Отменяем стандартную отправку (чтобы страница не перезагружалась)
    event.preventDefault();
    
    // Получаем значения полей и убираем лишние пробелы по краям
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    
    // Проверяем, заполнены ли имя и email
    if (name === '' || email === '') {
        alert('Пожалуйста, заполните имя и email');
        return;  // Останавливаем выполнение, если поля пустые
    }
    
    // Находим элемент для сообщения об успехе
    const messageElement = document.getElementById('formMessage');
    
    // Показываем зелёное сообщение
    messageElement.style.display = 'block';
    
    // Очищаем все поля формы
    this.reset();
    
    // Через 3 секунды скрываем сообщение
    setTimeout(function() {
        messageElement.style.display = 'none';
    }, 3000);
});
