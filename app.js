// grab screen

const screen = document.getElementById('screen')


//Grab operators

const add = document.getElementById('add')
const mult = document.getElementById('mult')
const divide = document.getElementById('divide')
const sub = document.getElementById('sub')

//Grab numbers

const zero = document.getElementById('zero')
const one = document.getElementById('one')
const two = document.getElementById('two')
const three = document.getElementById('three')
const four = document.getElementById('four')
const five = document.getElementById('five')
const six = document.getElementById('six')
const seven = document.getElementById('seven')
const eight = document.getElementById('eight')
const nine = document.getElementById('nine')

// Collectors 

const point = document.getElementById('point')
const clear = document.getElementById('clear')
const result = document.getElementById('result')


//add btn work

zero.addEventListener('click', () => {
    screen.value += '0'
})
one.addEventListener('click', () => {
    screen.value += '1'
})
two.addEventListener('click', () => {
    screen.value += '2'
})
three.addEventListener('click', () => {
    screen.value += '3'
})
four.addEventListener('click', () => {
    screen.value += '4'
})
five.addEventListener('click', () =>{
    screen.value += '5'
})
six.addEventListener('click', () => {
    screen.value += '6'
})
seven.addEventListener('click', () => {
    screen.value += '7'
})
eight.addEventListener('click', () => {
    screen.value += '8'
})
nine.addEventListener('click', () => {
    screen.value += '9'
})

//add functionality

result.addEventListener('click', () => {
    screen.value = eval(screen.value)
})
clear.addEventListener('click', () => {
    screen.value = ''
})

point.addEventListener('click', () => {
    screen.value += '.'
})

add.addEventListener('click', () => {
    screen.value += '+'
})
sub.addEventListener('click', () => {
    screen.value += '-'
})
divide.addEventListener('click', () => {
    screen.value += '/'
})
mult.addEventListener('click', () => {
    screen.value += '*'
})


