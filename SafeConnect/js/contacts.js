export function getContacts() {
    return JSON.parse(localStorage.getItem("contacts")) || [];
}

export function addContact(contact) {

    let contacts = getContacts();

    contacts.push(contact);

    localStorage.setItem("contacts", JSON.stringify(contacts));
}