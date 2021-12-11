const list = document.querySelectorAll('.list')

function activate() {
  list.forEach(el => el.classList.remove('active'))
  this.classList.add('active')
}

list.forEach(el => el.addEventListener('click', activate))