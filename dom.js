const str = 'The quick brown fox jumps over the lazy dog'


const title = document.querySelector('h1')

title.textContent = str

const lists = document.querySelectorAll('ul li')

//change to uppercase
lists[0].textContent = str.toUpperCase()

//to lowercase
lists[1].textContent = str.toLowerCase() 

//length method
lists[2].innerHTML = '<strong>Length of string: </strong>' + str.length

//charAt
lists[4].innerHTML = '<strong>Character at 10</strong>: '.concat('letter ',str.charAt(10))

//replace method
lists[3].innerHTML = str.replace('dog', 'cat')

//replace all
lists[5].innerText = str.toLowerCase().replaceAll('the', 'that')

document.getElementById('week1').innerText = "Society grows when\nmen plant trees \nwhose shed they will\n never seat under"

document.getElementById('week2').textContent = `Fox is at index ${str.indexOf('fox')}`

document.getElementById('week3').textContent = "Fox is at index " + str.indexOf('cat')

document.querySelector('#week4').textContent = str.lastIndexOf('o')

document.getElementsByClassName('front')[0].textContent = 'Does the string contain "lazy": ' + str.includes('lazy')

document.getElementsByClassName('front')[1].textContent = 'Does the string contain "hardworking": ' + str.includes('hardworking')

document.querySelectorAll('.front')[2].innerHTML = 'Does the string start with "The": ' + str.startsWith('The')

document.querySelectorAll('.front')[3].innerHTML = 'Count the number of words: ' + str.split(' ').length

document.getElementsByTagName('li')[10].textContent = str.slice(0,str.indexOf('x')+1)

