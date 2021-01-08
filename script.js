var btn = document.querySelector('button')
var startNumber = document.getElementById('start')
var endNumber = document.getElementById('end')
var increment = document.getElementById('inc')
var txtArea = document.getElementById('txtarea')

btn.addEventListener('click', () => {
    
    const start = Number(startNumber.value)
    const end = Number(endNumber.value)
    const inc = Number(increment.value)
    


    for (var i = start ; i <= end ; i = i + inc) {
        console.log(i)
        txtArea.innerText =+ i
    }
    
})