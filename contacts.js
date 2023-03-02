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

function getContactById(contactId) {
  fs.readFile(contactsPath, 'utf-8', (error, data) => {
    if (error) {
      throw error
    }
    const items = JSON.parse(data)
    const result = items.filter(item => item.id === JSON.stringify(contactId))
    console.table(result)
  }
  )
}

function removeContact(contactId) {
  fs.readFile(contactsPath, 'utf-8', (error, data) => {
    if (error) {
      throw error
    }
    const items = JSON.parse(data)
    const index = items.findIndex(item => item.id === JSON.stringify(contactId))
    items.splice(index, 1)
    const result = JSON.stringify(items)
    fs.writeFile(contactsPath, result, error => {
      if (error) throw error;
      console.table(items)
    })
  })
}

function addContact(name, email, phone) {


  fs.readFile(contactsPath, 'utf-8', (error, data) => {
    if (error) throw error;

    const items = JSON.parse(data);


    const contact = { name, email, phone, id: JSON.stringify(Date.now()) }

    items.push(contact);

    const result = JSON.stringify(items)

    fs.writeFile(contactsPath, result, (error) => {
      if (error) throw error;
      console.table(items)
    })
  })
}
module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact
}
