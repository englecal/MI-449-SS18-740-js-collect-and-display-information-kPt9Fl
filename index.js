var firstnameInput = document.getElementById('firstname')
var lastnameInput = document.getElementById('lastname')
var descriptionInput = document.getElementById('description')
var emailInput = document.getElementById('email')
var phoneInput = document.getElementById('phone')
var htmlpreviewOutput = document.getElementById('htmlPreview')
var generated = document.getElementById('generatedHTML')

var updatedinfo = function () {
  var firstname = firstnameInput.value
  var lastname = lastnameInput.value
  var description = descriptionInput.value
  var email = emailInput.value
  var phone = phoneInput.value
  var string = '<h1>Hi, my name is' + ' ' + firstname + ' ' + lastname + '!</h1>' +
  '<p>' + description + '</p>' +
  '<p>If you\'re interested in a date, you can email me at <a href="mailto:' + email + '" target="_blank">' + email + '</a> or give me a call  at <a href="tel:' + phone + '" target="_blank">' + phone + '</a></p>'
  htmlpreviewOutput.innerHTML = string
  generated.textContent = string
}

firstnameInput.addEventListener('input', updatedinfo)
lastnameInput.addEventListener('input', updatedinfo)
emailInput.addEventListener('input', updatedinfo)
phoneInput.addEventListener('input', updatedinfo)
descriptionInput.addEventListener('input', updatedinfo)
