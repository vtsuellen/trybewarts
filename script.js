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

const btn = document.querySelector('#submit-btn');
const formPrincipal = document.querySelector('#evaluation-form');
const formSecundario = document.querySelector('#form-data');
const returnName = document.querySelector('#input-name');
const returnLastname = document.querySelector('#input-lastname');
const returnEmail = document.querySelector('#input-email');
const returnHouse = document.querySelector('#house');
const returnFamily = document.getElementsByName('family');
const returnContent = document.getElementsByClassName('subject');
const returnEvaluation = document.getElementsByName('rate');
const returnObs = document.querySelector('#textarea');
const submitNome = document.querySelector('#returnNome');
const submitEmail = document.querySelector('#returnEmail');
const submitCasa = document.querySelector('#returnCasa');
const submitFamilia = document.querySelector('#returnFamilia');
const submitMateria = document.querySelector('#returnMaterias');
const submitAvaliacao = document.querySelector('#returnAvaliacao');
const submitObs = document.querySelector('#returnObs');

const enviaFamilia = () => {
  let familia = '';
  for (let i = 0; i < returnFamily.length; i += 1) {
    if (returnFamily[i].checked === true) {
      familia = returnFamily[i].value;
    }
  }
  submitFamilia.innerHTML += familia;
};

const enviaMateria = () => {
  let materia = '';
  for (let index = 0; index < returnContent.length; index += 1) {
    if (returnContent[index].checked === true) {
      materia += `${returnContent[index].value}, `;
    }
  }
  submitMateria.innerHTML += materia;
};

const enviaAvaliacao = () => {
  let avaliacao = '';
  for (let i = 0; i < returnEvaluation.length; i += 1) {
    if (returnEvaluation[i].checked === true) {
      avaliacao = returnEvaluation[i].value;
    }
  }
  submitAvaliacao.innerHTML += avaliacao;
};

const enviarForm = (event) => {
  // Não atualiza a pagina ao click
  event.preventDefault();
  // Adiciona display none no formulario da pagina principal
  formPrincipal.style.display = 'none';
  formSecundario.style.display = 'flex';

  submitNome.innerHTML += `${returnName.value} ${returnLastname.value}`;
  submitEmail.innerHTML += returnEmail.value;
  submitCasa.innerHTML += returnHouse.value;
  submitObs.innerHTML += returnObs.value;

  enviaFamilia();
  enviaAvaliacao();
  enviaMateria();
};

formPrincipal.addEventListener('submit', enviarForm);
