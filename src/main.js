// require('./child_a.css')
// require('./main.css')

import './child_a.css'
import './main.css'
import pic from './pic.jpg'
import _ from 'underscore'
import add from './child_a.js'

const arr = [];

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
    if (_.isEmpty(arr)) {
        console.log('This is an empty');
    }
}
// ...
if (__PRERELEASE__) {

    const result = add(133, 2)
    console.log(result)
}