const names = ['Abigail', 'Alexandra', 'Alison', 'Amanda', 'Angela', 'Bella', 'Carol', 'Caroline', 'Carolyn', 'Deirdre', 'Diana', 'Elizabeth', 'Ella', 'Faith', 'Olivia', 'Penopope']

function callback(result){
    console.log(result);
}
function getFilter(x, limit, callback) {
    const newArr = names.filter(item => item.toLocaleLowerCase().includes(x))
    const arrBaru = newArr.splice(0,limit)
    return callback(arrBaru)
}
getFilter('an', 3, callback)