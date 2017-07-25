import _ from 'underscore'
import printMe from './print.js'
import './main.css'

function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');

    element.innerHTML = 'Hello Webpack'
    btn.innerHTML = 'Click me and check console'
    btn.onclick = printMe
    element.appendChild(btn)
    return element
}

document.body.appendChild(component())