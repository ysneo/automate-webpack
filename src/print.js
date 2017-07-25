import _ from 'lodash'

export default function printMe() {
    const msg = _.join(['Output', 'Management', 'Orz'], ' ')
    alert(msg)
    console.log(msg)
}