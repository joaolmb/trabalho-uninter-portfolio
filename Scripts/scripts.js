document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário

    // Limpar mensagens de erro
    clearErrors();

    let isValid = true;

    // Validação do nome
    const name = document.getElementById('name').value.trim();
    if (name === '') {
        setError('nameGroup', 'nameError', 'O nome é obrigatório.');
        isValid = false;
    }

    // Validação do e-mail
    const email = document.getElementById('email').value.trim();
    if (email === '') {
        setError('emailGroup', 'emailError', 'O e-mail é obrigatório.');
        isValid = false;
    } else if (!validateEmail(email)) {
        setError('emailGroup', 'emailError', 'O e-mail não é válido.');
        isValid = false;
    }

    // Validação do telefone
    const phone = document.getElementById('phone').value.trim();
    const phonePattern = /^\d{4,5}-\d{4}$/;
    if (phone === '') {
        setError('phoneGroup', 'phoneError', 'O telefone é obrigatório.');
        isValid = false;
    } else if (!phonePattern.test(phone)) {
        setError('phoneGroup', 'phoneError', 'O telefone deve estar no formato 12345-6789.');
        isValid = false;
    }

    // Validação da mensagem
    const message = document.getElementById('message').value.trim();
    if (message === '') {
        setError('messageGroup', 'messageError', 'A mensagem é obrigatória.');
        isValid = false;
    }

    if (isValid) {
        alert('Formulário enviado com sucesso!');
        // Aqui você pode adicionar a lógica para enviar o formulário, como AJAX ou um método de backend
    }
});

function setError(groupId, errorId, message) {
    const group = document.getElementById(groupId);
    group.classList.add('error');
    const errorMessage = document.getElementById(errorId);
    errorMessage.textContent = message;
}

function clearErrors() {
    const errorGroups = document.querySelectorAll('.form-group');
    errorGroups.forEach(group => {
        group.classList.remove('error');
    });

    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(message => {
        message.textContent = '';
    });
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}