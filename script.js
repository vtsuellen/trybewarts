// Valide o formulário
const form = document.querySelector('.trybewarts-login');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const email = document.querySelector('#email').value;
  const password = document.querySelector('#senha').value;

  if (email === 'tryber@teste.com' && password === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

// Está função conta os caracteres

const contarCaracteres = () => {
  const textarea = document.getElementById('textarea');
  const counter = document.getElementById('counter');
  const maxLength = 500;
  const currentLength = textarea.value.length;
  const remainingLength = maxLength - currentLength;
  counter.textContent = remainingLength;
};

const textarea = document.getElementById('textarea');
textarea.addEventListener('keyup', contarCaracteres);

// Desabilite o botão caso o checkbox não esteja selecionado
const agreementCheckbox = document.getElementById('agreement');
const submitButton = document.getElementById('submit-btn');
// Aqui o botão é desabilitado
submitButton.disabled = true;
// Habilita o botão cheked quando marcado
agreementCheckbox.addEventListener('change', () => {
  if (agreementCheckbox.checked) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
});

// Substitua o formulário pelas informações da pessoa estudante
