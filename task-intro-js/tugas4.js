let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address:
    {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
}

const newName = {...data, name: 'Rifqy Andika', email: 'andikakiky87@gmail.com', hobby: 'bermain musik'}
const { address } = data;
const { street, city } = address
console.log(newName)
// console.log(address)
console.log(`Street: ${street} City: ${city}`)