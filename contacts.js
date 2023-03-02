const fs = require('fs');
const path = require('path');

let contactsPath = path.join(__dirname, './db/contacts.json')
/*
 * Раскомментируй и запиши значение
 * const contactsPath = ;
 */

// TODO: задокументировать каждую функцию
function listContacts() {
  fs.readFile(contactsPath, 'utf-8', (error, data) => {
    if (error) throw error;
    console.table(JSON.parse(data))
  })
}
listContacts()

function getContactById(contactId) {
  fs.readFile(contactsPath, 'utf-8', (error, data) => {
    if (error) {
      throw error
    }
    const items = JSON.parse(data)
    const result = items.filter(item => item.id === contactId)
    console.log(result)
  }
  )
}
getContactById('2');
function removeContact(contactId) {
  fs.readFile(contactsPath, 'utf-8', (error, data) => {
    if (error) {
      throw error
    }
    const items = JSON.parse(data)
    const index = items.findIndex(item => item.id === contactId)
    items.splice(index, 1)
    console.log(items)
  })
}
removeContact('3');
function addContact(name, email, phone) {

  const contact = { name, email, phone, id: Date.now() }

  fs.readFile(contactsPath, 'utf-8', (error, data) => {
    if (error) throw error;

    const items = JSON.parse(data);
    items.push(contact);

    const result = JSON.stringify(items)

    fs.writeFile(contactsPath, result, (error) => {
      if (error) throw error;
      console.table(items)
    })
  })
}
addContact('dima', 'mac@bk.ru', '+2222222')
module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact
}
