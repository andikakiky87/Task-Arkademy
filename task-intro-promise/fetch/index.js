const fetch = require('node-fetch')
const url = 'https://jsonplaceholder.typicode.com/users'

const getData = () => {
    fetch(url).then(res => res.json()).then((json) => {
        json.map((item) => {
            return console.log(item.name);
        })
    })
}


getData()
