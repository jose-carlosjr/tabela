const frm = document.querySelector('form')
const resp1 = document.getElementById('resp1')
const x = document.getElementById('x')
const resp2 = document.getElementById('resp2')

let clubes = []

frm.addEventListener('submit', (e) => {
    e.preventDefault()

    const clube = frm.iclube.value

    clubes.push(clube)
    
    frm.reset()
    frm.iclube.focus()
    frm.btListar.dispatchEvent(new Event ('click'))
})

frm.btListar.addEventListener('click', () => {
    if (clubes.length == 0) {
        alert('Não há clubes a serem listados')
    } 
    
    let lista = ''
    let pos = 1
    for (const club of clubes) {
        lista += `${pos++}ª ${club} \n`
    }   
    
    resp1.innerText = lista
    resp2.innerText = ''
    frm.iclube.focus()
})

frm.btTabela.addEventListener('click', () => {
    if (clubes.length % 2 != 0) {
        alert('Não é possível definir uma tabela com um número ímpar de clubes')
        return
    }

    let listaA = ''
    let listaB = ''
    let divisoria = ''
    let ladoA = ''
    let ladoB = ''

    for (let i = 0; i < clubes.length / 2; i++) {
        ladoA += `${i + 1}º ${clubes[i]} \n`
    }

    for (let y = 0; y < clubes.length / 2; y++) {
        divisoria += `x \n`
    }

    for (let c = clubes.length - 1; c >= clubes.length / 2; c--) {
        ladoB += `${c + 1}º ${clubes[c]} \n`
    }

    listaA = ladoA
    listaB = ladoB

    resp1.innerText = ladoA
    x.innerText = divisoria
    resp2.innerText = ladoB
})

/* 
    0 - Arsenal
    1 - West Ham
    2 - QPR
    3 - Chelsea


    4 - Fulham
    5 - Tottenham
    6 - Aston Villa
    7 - Burnley
*/