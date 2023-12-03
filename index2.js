// data - данные
let student = {
	info: {
		firstName: 'Ivan',
		lastName: 'Ivanov'
	},
	address: {
		country: 'France',
		city: 'Paris',
	}
}

// render - рендерим алгоритм
document.write('<b>firstName: </b>', student.info.firstName, '<br>')
document.write('<b>lastName: </b>',student.info.lastName, '<br>')

document.write('<b>country: </b>',student.address.country, '<br>')
document.write('<b>city: </b>',student.address.city, '<br>')