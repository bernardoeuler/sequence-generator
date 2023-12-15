const btn = document.querySelector('button')
const startNumber = document.getElementById('start')
const endNumber = document.getElementById('end')
const increment = document.getElementById('inc')
const txtArea = document.getElementById('txtarea')
const separator = document.getElementById('sep')

btn.addEventListener('click', () => {
    const start = Number(startNumber.value)
    const end = Number(endNumber.value)
    const inc = Number(increment.value)
    const sep = separator.value

    txtArea.value = ""

    for (let i = start ; i <= end ; i = i + inc) {
        if (i === end ) return txtArea.value += i
        txtArea.value += i + sep
    }
})