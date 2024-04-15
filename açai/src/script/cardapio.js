lucide.createIcons();

/*select1*/
let select = document.querySelector('.select'),
selectValue = document.getElementById('selected-value'),
optionsViewButton = document.getElementById('options-view-button'),
inputsOptions = document.querySelectorAll('.option input')

inputsOptions.forEach(input => {
    input.addEventListener('click', Event => {
        selectValue.textContent = input.dataset.label

        const isMouseOrTouch = 
        Event.pointerType = "mouse"
        Event.pointerType = "touch"
        
        isMouseOrTouch && optionsViewButton.click()

    })
})

/*select2*/
let select2 = document.querySelector('.select2'),
selectValue2 = document.getElementById('selected-value2'),
optionsViewButton2 = document.getElementById('options-view-button2'),
inputsOptions2 = document.querySelectorAll('.option2 input')

inputsOptions2.forEach(input => {
    input.addEventListener('click', Event => {
        selectValue2.textContent = input.dataset.label

        const isMouseOrTouch = 
        Event.pointerType = "mouse"
        Event.pointerType = "touch"
        
        isMouseOrTouch && optionsViewButton2.click()

    })
})

/*select3*/
let select3 = document.querySelector('.select3'),
selectValue3 = document.getElementById('selected-value3'),
optionsViewButton3 = document.getElementById('options-view-button3'),
inputsOptions3 = document.querySelectorAll('.option3 input')

inputsOptions3.forEach(input => {
    input.addEventListener('click', Event => {
        selectValue3.textContent = input.dataset.label

        const isMouseOrTouch = 
        Event.pointerType = "mouse"
        Event.pointerType = "touch"
        
        isMouseOrTouch && optionsViewButton3.click()

    })
})

/*select4*/
let select4 = document.querySelector('.select4'),
selectValue4 = document.getElementById('selected-value4'),
optionsViewButton4 = document.getElementById('options-view-button4'),
inputsOptions4 = document.querySelectorAll('.option4 input')

inputsOptions4.forEach(input => {
    input.addEventListener('click', Event => {
        selectValue4.textContent = input.dataset.label

        const isMouseOrTouch = 
        Event.pointerType = "mouse"
        Event.pointerType = "touch"
        
        isMouseOrTouch && optionsViewButton4.click()

    })
})

/*select5*/
let select5 = document.querySelector('.select5'),
selectValue5 = document.getElementById('selected-value5'),
optionsViewButton5 = document.getElementById('options-view-button5'),
inputsOptions5 = document.querySelectorAll('.option5 input')

inputsOptions5.forEach(input => {
    input.addEventListener('click', Event => {
        selectValue5.textContent = input.dataset.label

        const isMouseOrTouch = 
        Event.pointerType = "mouse"
        Event.pointerType = "touch"
        
        isMouseOrTouch && optionsViewButton5.click()

    })
})



/*select11*/
let select11 = document.querySelector('.select11'),
selectValue11 = document.getElementById('selected-value11'),
optionsViewButton11 = document.getElementById('options-view-button11'),
inputsOptions11 = document.querySelectorAll('.option11 input')

inputsOptions11.forEach(input => {
    input.addEventListener('click', Event => {
        selectValue11.textContent = input.dataset.label

        const isMouseOrTouch = 
        Event.pointerType = "mouse"
        Event.pointerType = "touch"
        
        isMouseOrTouch && optionsViewButton11.click()

    })
})

// botao
function wpp() {

    var numero = "+5524981298153";
    var nome = document.querySelector('.nomeC').value;
    var numerocl = document.querySelector('.numeroC').value;
    var rua = document.querySelector('.ruaC').value;
    var bairro = document.querySelector('.bairroC').value;
    var nr = document.querySelector('.nrC').value;

    var copo =  document.querySelector('.option input').value;
    var sabor = document.querySelector('.option2 input').value;
    var calda = document.querySelector('.option3 input').value;
    var adcc =  document.querySelector('.option4 input').value;
    var adcm =  document.querySelector('.option5 input').value;
    var mtP =   document.querySelector('.option11 input').value;
   
    var web = "https://wa.me/" + numero + "?text=" 
    + "Nome: " + nome + "%0a"
    + "Numero: " + numerocl + "%0a"
    + "Endereço: " + rua + "-" + "N: " + nr + "%0a"
    + "Bairro: " + bairro + "%0a"
    + "Copo: " + copo + "%0a"
    + "Sabor: " + sabor + "%0a"
    + "Calda: " + calda + "%0a"
    + "Adc de cima: " + adcc + "%0a"
    + "Adc do meio: " + adcm + "%0a"
    + "Método de Pagamento: " + mtP;

    window.open(web).focus()
}
