
// 1. Užduotis

var kaina = prompt('Kokia yra prekės kaina?')
var pvm = kaina * 0.21
var kainaSupvm = parseFloat(kaina) + parseFloat(pvm)

console.log('Prekės kaina su PVM: ' + kainaSupvm.toFixed(2) + ' €' )
console.log( 'PVM: ' + pvm + '€' )
console.log( 'Prekės kaina be PVM: ' + kaina + ' €' )



console.log('========&&======')

// 2. Užduotis

var itemPrice = parseFloat(prompt('Įveskite prekės kainą'))
var agree = confirm('Ar reikalingas pristatymas į namus? (taip/ne)')

if (agree) {
var miestas = prompt('Į kurį miestą reikės pristatyti?')

var shipFree = itemPrice >= 50 || miestas.toLowerCase() === 'vilnius'

if (shipFree) {
console.log('Prekės kaina: ' + itemPrice + ' €')
console.log('Iš viso: ' + itemPrice + ' €')
console.log('Prekę pristatysime į ' + miestas + ' per 1-3 dienas.')
} else {
console.log('Prekės kaina: ' + itemPrice + ' €')
console.log('Pristatymas: ' + 20 + ' €')
console.log('Iš viso: ' + (itemPrice + 20) + ' €')
console.log('Prekę pristatysime į ' + miestas + ' per 1-3 dienas.')
}
} else {
console.log('Prekės kaina: ' + itemPrice + '€');
console.log('Prekę galite atsiimti nemokamai Vilniuje adresu Gedimino pr. 1a')
}


