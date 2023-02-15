const dropDown = document.querySelector('.dropdown')
const dropDownToggle = document.querySelector('.dropdown-toggle')
const menu = document.querySelector('.dropdown-menu')
const options = document.querySelectorAll('.dropdown-option')
const nextButton = document.querySelector('.next-button')

dropDownToggle.addEventListener('click', function () {
  menu.classList.toggle('show')
})

options.forEach((item) => item.addEventListener('click', selectOption))

function selectOption(e) {
  const optionName = e.target.innerText
  dropDownToggle.innerText = optionName
  menu.classList.remove('show')
  dropDownToggle.classList.add('selected')
  nextButton.removeAttribute('disabled')
}

// querySelectorAll 과 forEach 개념부족
//
