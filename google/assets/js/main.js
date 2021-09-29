function prevenirEnvio(e) {
  e.preventDefault()
}

const button = document.querySelectorAll('button')
addEventListener('click', prevenirEnvio) // previne o envio do formulário ao clicar nos ícones que estão dentro de buttons

function containerModal() {
  const modal = document.querySelector('.container-modal') 
  modal.classList.add('mostrar')
  modal.addEventListener('click', function(e) {
    if (e.target == modal) {
      modal.classList.remove('mostrar')
    }
  })
}

const apps = document.querySelector('.apps')
apps.addEventListener('click', function() {
  containerModal() 
})