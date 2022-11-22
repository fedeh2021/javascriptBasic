const h1 = document.querySelector('h1')
const input1 = document.querySelector('#calculo1')
const input2 = document.querySelector('#calculo2')
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result')

btn.addEventListener('click', btnOnClick)

function btnOnClick(){
    const sumaInputs = innerText = parseInt(input1.value) + parseInt(input2.value)
    pResult.innerText = "Resultado: " + sumaInputs
}

input2.addEventListener('click', showMessageWhenFocus);

function showMessageWhenFocus(){
    alert("Hiciste focus!!")
}


//h1.innerHTML = "Cambio titulo"

//h1.getAttribute('pantalla')
//h1.setAttribute('class', 'rojo')

//h1.classList.add('rojo')
//h1.classList.remove('verde')


//const img = document.createElement('img')
//img.setAttribute('src', 'https://media.vandal.net/i/1200x630/10-2021/2021105724573_1.jpg')
//pid.replace(img)