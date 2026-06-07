const contactForm = document.getElementById("contactForm");
const contactList = document.getElementById("contactList");

let contacts = JSON.parse(localStorage.getItem("contacts")) || [];

displayContacts();

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name =
        document.getElementById("contactName").value;

    const phone =
        document.getElementById("contactPhone").value;

    const newContact = {
        name,
        phone
    };

    contacts.push(newContact);

    localStorage.setItem(
        "contacts",
        JSON.stringify(contacts)
    );

    contactForm.reset();

    displayContacts();
});

function displayContacts() {

    contactList.innerHTML = "";

    contacts.forEach((contact, index) => {

        const li = document.createElement("li");

        li.innerHTML = `
            ${contact.name} - ${contact.phone}
            <button onclick="deleteContact(${index})">
                Delete
            </button>
        `;

        contactList.appendChild(li);
    });
}

function deleteContact(index) {

    contacts.splice(index, 1);

    localStorage.setItem(
        "contacts",
        JSON.stringify(contacts)
    );

    displayContacts();
}