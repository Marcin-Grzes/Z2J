const btn = document.querySelectorAll('.btn')
const player1 = []
const player2 = []

// console.log(btn)

/*
for (let i in btn) {
    console.log(btn[i].classList.value[4])
}
*/

for(let i = 0; i < btn.length; i++) {
    console.log(btn[i].classList.value[4])

}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
}

for (let i = 0; i < 5; i++) {
    player2.push(getRandomInt(1, 10))
    console.log(player2[i])
}



/*const choice = function () {

}

const game = function () {

}*/




// console.log(getRandomInt(1, 10))

/*
btn.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.classList.add('o')
        btn.innerText = 'o'
        console.log(btn.classList.contains('o'))
        player1.push(btn.classList.value[4])
        console.log(player1)
    })
})
*/

