const _tablero = document.querySelector('#tablero')
const _numberUserData = document.getElementById('numberUserFormData');
const _btn = document.querySelector('#btn')

let numberRandom = Math.floor(Math.random()* (10 - 1)) + 1;
console.log(numberRandom)
let numberUser =  parseInt(prompt('Adivina cual es el numero del 1 al 10'));

// if(numberUser != numberRandom){
//     alert('Perdiste')
//     }

// if(numberUser == numberRandom){
//     alert('Ganaste!')
// }
        
if(numberUser == numberRandom){
    alert('Ganaste! 🤩')
    _tablero.innerHTML =
    `
    <img src="img/giphy.gif" alt="a">
    <p class="epigrafe">Felicitaciones Ganaste</p>
    `

}else{
    alert('¡Incorrecto!😨')
    let numberUser2 = parseInt(prompt(' Te quedan 2 vidas, Cual es el numero?'));
    if(numberUser2 == numberRandom){
        alert('Ganaste!😉')
    }else{
        alert('¡Incorrecto!😱')
        let numberUser3 = parseInt(prompt('¡INCORRECTO! Ultima vida, Cual es el numero?'));
        if(numberUser3 == numberRandom){
            alert('🤠Ganaste! que suerte che🤠')
        }else{
            _tablero.innerHTML = 
            `
            <img src="img/bob-sad.gif" alt="a">
            <p class="epigrafe">El numero ganador era ${numberRandom}</p>
            `
        alert('Game Over☠️')
    }
    }
}
    




console.log('Gracias por usar este juego para romper el hielo y reirse con amigos, para contactarme enviame un mail a SLM17SLM17@GMAIL.COM')