let navWrapper = document.querySelector('.header-nav'),
navToogler =  document.querySelector('.sandwich')

navToogler.addEventListener('click', function (event) {
navWrapper.classList.toggle('active')
})