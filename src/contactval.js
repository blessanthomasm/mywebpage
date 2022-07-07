function validate() {
  var re = /^[A-Za-z]+$/
  if (re.test(document.getElementById('first').value)) {
  } else alert('Invalid First Name.')
}
function validates() {
  var re = /^[A-Za-z]+$/
  if (re.test(document.getElementById('last').value)) {
  } else alert('Invalid Last Name.')
}
function validat() {
  var re = /^[A-Za-z@1-9.]+$/
  if (re.test(document.getElementById('email').value)) {
  } else alert('Invalid Gmail.')
}
