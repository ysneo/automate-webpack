 import _ from 'lodash'
 import printMe from './print.js'
 import './main.css'

 function component() {
     const element = document.createElement('div');
     const btn = document.createElement('button');
     const content = _.join(['hello', 'webpack', '!'], ' ')
     element.innerHTML = content
     btn.innerHTML = 'Click me and check console'
     btn.onclick = printMe
     element.appendChild(btn)
     return element
 }

 document.body.appendChild(component())