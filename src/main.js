require('./child_a.css')
require('./main.css')



const h1 = document.createElement('h1')
h1.textContent = 'hello world'
h1.classList.add('box')
document.body.appendChild(h1)

if (__DEV__) {
    console.warn('Extra logging');
}
// ...
if (__PRERELEASE__) {
    const add = require('./child_a')
    const result = add(133, 2)
    console.log(result)
}
