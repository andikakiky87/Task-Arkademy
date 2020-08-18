const express = require('express')
const fetch = require('node-fetch')
const url = 'https://jsonplaceholder.typicode.com/users'
const port = 3002
const app = express()

const getData = () => {
    fetch(url).then(res => res.json()).then((json) => {
        json.map((item) => {
            return console.log(item.name);
        })
    })
}


getData()

app.get('/user', async (req, res) => {
    const data = await fetch(url).then(res => res.json())
    const getName = data.map((item) => {
        return item.name
    })
    res.send(getName)
})

app.listen(port, () => {
    console.log(`Server running at port ${port}`);
})


