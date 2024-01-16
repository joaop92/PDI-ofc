
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const errorMessage = document.getElementById('errorMessage');

function login() {
  const email = emailInput.value;
  const password = passwordInput.value;

  
  auth.signInWithEmailAndPassword(email, password)
    .then(() => {
   
      window.location.href = 'pagina-secreta.html'; // Redireciona para a página após o login
    })
    .catch((error) => {
      // Erro ao fazer login
      errorMessage.textContent = error.message;
    });
}