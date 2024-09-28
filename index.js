
(function() {
   document.querySelector('.nav-button').addEventListener('mouseenter', function(event) {
    this.parentNode.parentNode.classList.toggle('closed')
    event.stopPropagation()

  }, false)

  document.querySelector('.drop-down').addEventListener('mouseleave', function(event) {
    this.classList = ('drop-down closed')
    event.stopPropagation()

  }, false)

})();
