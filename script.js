

    const recipTXT = document.querySelector('#peso-recip-id')
    const pesoTXT = document.querySelector('#peso-id')
    const pesoTotal2TXT = document.querySelector('#peso2-id')
    const pesoTotal3TXT = document.querySelector('#peso3-id')
    const alternativaTXT = document.querySelector('#peso-auto-id')
    const pesoTotalTXT = document.querySelector('#peso-total-id')
    const resultadoTXT = document.querySelector('#resultado')
    let sobrePeso = document.querySelector('#sobrepeso-id')
    const radio = document.getElementsByName('radio-recip')
    const mais = document.querySelector('h2')
    const instru = document.querySelector('ul')

    let checkTrue = document.querySelector('.checkbox-true')


    function checarBox() {

        if (sobrePeso.checked) {
            checkTrue.style.display = 'block'
            return true
        } else {
            checkTrue.style.display = 'none'
            return false
        }
    }

    function resultado() {
        let recipiente = Number(recipTXT.value)
        const alternativa = Number(alternativaTXT.value)
        const peso = Number(pesoTXT.value)
        let unidade = 0
        const pesoTotal = Number(pesoTotalTXT.value)
        const pesoTotal2 = Number(pesoTotal2TXT.value)
        const pesoTotal3 = Number(pesoTotal3TXT.value)

        if (radio[0].checked) {
            recipiente = 0.2
            console.log(recipiente)
        } else if (radio[1].checked) {
            recipiente = 0
        }
        if (alternativa) {
            unidade = peso / alternativa
        } else {
            unidade = peso / 5
        }
        if (checarBox == true) {
            pesoTotal2 = Number(pesoTotal2TXT.value)
        }
        const resultado = ((pesoTotal + pesoTotal2 + pesoTotal3) - recipiente) / unidade
        resultadoTXT.innerHTML = Math.round(resultado)
    }

    function veriRadio() {
        if (radio[2].checked) {
            document.querySelectorAll('.radio-item')[3].style.display = 'block'
        } else {
            document.querySelectorAll('.radio-item')[3].style.display = 'none'


        }
    }

    function ativo() {
        if (instru.classList.contains('ativado')) {
            mais.classList.remove('ativo')
        } else (
            mais.classList.add('ativo')
        )
    }

    mais.addEventListener("click", () => {
        ativo()
        instru.classList.toggle('ativado')

    })





