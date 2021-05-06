let circumference
let area
// adding event listener to the button, when pressed, it preforms the functions doArea and doCircumference.
document.getElementById('button').addEventListener('click', doArea)
document.getElementById('button').addEventListener('click', doCircumference)

function doCircumference () {
  // gets the input value
  circumference = document.getElementById('input').value

  // converts it to a floating point number
  circumference = parseFloat(circumference)

  // multiply by pi
  circumference = Math.PI * circumference

  // write to HTML
  document.getElementById('circans').innerHTML = circumference
}

function doArea () {
  // gets the input value
  area = document.getElementById('input').value

  // converts it to a floating point number
  area = parseFloat(area)

  // divide by 2 for radius
  area = area / 2

  // square it
  area = area * area

  // pi times r squared
  area = Math.PI * area

  // write to HTML
  document.getElementById('areaans').innerHTML = area
}
