document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    
    if (name === '' || email === '') {
        alert('Пожалуйста, заполните имя и email');
        return;
    }
    
    let msg = document.getElementById('formMessage');
    msg.style.display = 'block';
    this.reset();
    
    setTimeout(function() {
        msg.style.display = 'none';
    }, 3000);
});
