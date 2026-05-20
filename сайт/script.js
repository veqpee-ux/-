document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    
    if (name === '' || email === '') {
        alert('Заполните все поля');
        return;
    }
    
    document.getElementById('message').style.display = 'block';
    this.reset();
    
    setTimeout(() => {
        document.getElementById('message').style.display = 'none';
    }, 3000);
});