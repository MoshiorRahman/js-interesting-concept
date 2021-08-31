function welcomeMessage(name, greetHandler) {
    greetHandler(name)
}
// const names = ['tom Hanks', 'tom crose']
// // welcomeMessage(names)
// const myobj = { name: 'Rokibul', age: 33 }
function greedMorning(name) {
    console.log('good morning', name);
}
function greedAfternoon(name) {
    console.log('good greedAfternoon', name);
}
function greedEvening(name) {
    console.log('good greedEvening', name);
}
welcomeMessage('Tom Hanks', greedMorning)
welcomeMessage('Sakib Hanks', greedAfternoon)
welcomeMessage('Bapparaj Hanks', greedEvening)