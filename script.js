let circumference
let area

document.getElementById('button').addEventListener('click', doArea)
document.getElementById('button').addEventListener('click', doCircumference)

function doCircumference () {
  circumference = document.getElementById('input').value

  circumference = parseFloat(circumference)

  circumference = Math.PI * circumference

  document.getElementById('circAns').innerHTML = circumference
}

function doArea () {
  area = document.getElementById('input').value

  area = parseFloat(area)

  area = area / 2

  area = area * area

  area = Math.PI * area

  document.getElementById('areaAns').innerHTML = area
}
