// Load contacts from localStorage
let contacts = JSON.parse(localStorage.getItem("contacts")) || [];

// Display contacts on page load
window.onload = function () {
    displayContacts();
};

// Add contact
function addContact() {
    let name = document.getElementById("contactName").value;
    let phone = document.getElementById("contactPhone").value;

    if (!name || !phone) {
        alert("Please enter both name and phone");
        return;
    }

    contacts.push({ name, phone });
    localStorage.setItem("contacts", JSON.stringify(contacts));

    document.getElementById("contactName").value = "";
    document.getElementById("contactPhone").value = "";

    displayContacts();
}

// Display contacts (FIX for "not appearing")
function displayContacts() {
    let list = document.getElementById("contactList");
    list.innerHTML = "";

    if (contacts.length === 0) {
        list.innerHTML = "<li>No contacts added yet</li>";
        return;
    }

    contacts.forEach((c, index) => {
        let li = document.createElement("li");
        li.innerHTML = `
            ${c.name} - ${c.phone}
            <button onclick="deleteContact(${index})">Delete</button>
        `;
        list.appendChild(li);
    });
}

// Delete contact
function deleteContact(index) {
    contacts.splice(index, 1);
    localStorage.setItem("contacts", JSON.stringify(contacts));
    displayContacts();
}

// FIXED Send Alert Button
document.getElementById("sendAlertBtn").addEventListener("click", function () {
    let status = document.getElementById("alertStatus");

    if (contacts.length === 0) {
        status.innerText = "No contacts to send alert to!";
        status.style.color = "red";
        return;
    }

    // Simulated alert sending
    contacts.forEach(c => {
        console.log(`ALERT SENT TO: ${c.name} (${c.phone})`);
    });

    status.innerText = "🚨 Alert sent to all trusted contacts!";
    status.style.color = "green";
});