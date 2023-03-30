let arrSize = prompt('Enter array size');
while (isNaN(arrSize) || !arrSize || arrSize < 2) {
  arrSize = parseInt(prompt("Invalid input. Please enter a valid number:"));
}

let arrA = Array.from({ length: arrSize }, () => Math.floor(Math.random() * 100) + 1)

document.write('Array:<br>')
document.write(arrA + '<br><br>')

let arrB = arrA.filter(num => {
  for (let index = 2; index <= num; index++) {
    if (num % index == 0 && num != index) {
      break;
    } else if (num % index == 0 && num == index) {
      return num
    }
  }
})

document.write('Prime numbers:<br>')
if (Array.isArray(arrB) && !arrB.length) {
  document.write('No prime numbers in array <br><br>')
} else {
  document.write(arrB + '<br><br>')

  document.write('Minimal element of array b <br>')
  document.write(Math.min(...arrB) + '<br><br>')
  document.write('Maximal element of array b <br>')
  document.write(Math.max(...arrB))
}
