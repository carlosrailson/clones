function prevenirEnvio(e) {
  e.preventDefault()
}

const button = document.querySelectorAll('button')
addEventListener('click', prevenirEnvio) // previne o envio do formulário ao clicar nos ícones que estão dentro de buttons

function apps() {
  const modal = document.querySelector('.container-modal')
  modal.style.display = 'flex'
}

function containerModal() {
  const modal = document.querySelector('.container-modal')
  if (modal.style.display = 'flex') {
    modal.style.display = 'none'
  }
} // É preciso corrigir esta parte do código, pois está acontecendo um bug. Mesmo clicando apenas no 'modal', o 'container-modal' está sendo afetado e ao invés de fechar apenas uma div, acaba fechando as duas;