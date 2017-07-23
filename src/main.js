// require('./child_a.css')
// require('./main.css')

import './child_a.css'
import './main.css'
import pic from './pic.jpg'


function header() {
    const h1 = document.createElement('h1')
    h1.textContent = 'hello world'
    h1.classList.add('box')
    document.body.appendChild(h1)
}

function image() {
    const img = new Image()
    img.src = pic
    document.body.appendChild(img)
}


if (__DEV__) {
    console.warn('Extra logging')
    header()
    image()
}
// ...
if (__PRERELEASE__) {
    const add = require('./child_a')
    const result = add(133, 2)
    console.log(result)
}
