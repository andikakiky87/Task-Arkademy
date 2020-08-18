const fetch = require('node-fetch')
const url = 'https://jsonplaceholder.typicode.com/users'

const getData = async () => {
    try {
        const data = await fetch(url).then(res => res.json())
        const getName = data.map((item) => {
            return console.log(item.name);
        })
    } catch (error) {
        console.error(error);
    }
}


getData()



