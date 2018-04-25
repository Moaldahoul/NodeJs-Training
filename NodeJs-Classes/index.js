// Constact list class
// Add a contact 
// Remove a contact 
/**
 * Class for create contact list
 */
class ConstactList {
    constructor() {
        this.list_of_contacts = []; // Array

    }
    /**
     * Add a contact to the contact list 
     * @param {number} contact is an object that represent a contact
     * @description 
     * first create a new contact with the class Contact like so
     */
    addContact(contact) {
        // I need to check if contact exist
        let exist = false;
        this.list_of_contacts.forEach((contact_in_the_list) => {
            exist = (contact.name === contact_in_the_list.name || contact.phone === contact_in_the_list.phone)
        });
        if (exist) {
            //do nothing
        } else {
            this.list_of_contacts.push(contact);
        }

    }
    /**
     * Remove a contact from the list
     * @param {number} i is the index of the array of the contact list
     */
    removeContact(i) {
        if (this.list_of_contacts[i]) {
            this.list_of_contacts.splice(i, 1);
        }
    }

    /**
     * remove all contacts
     */
    removeAllContacts() {
        this.list_of_contacts = [];
    }
    /**
     * 
     * @param {string} name of contact
     */
    searchByName(name) {
        let phone;
        this.list_of_contacts.forEach((contact) => {
            if (contact.name === name) {
                phone = contact.phone;
            }
        });
        return phone;
    }
}

class Contact {
    /**
     * 
     * @param {string} name is the name of the contact
     * @param {number} phone is  the phone number of the contact
     * @example
     * first create a new contact with the clas Contact list so:
     *  const contact = new Contact("mohamed", 32453455);
     */
    constructor(name, phone) {
        this.name = name;
        this.phone = phone;
    }

}

class VipContact extends Contact {
    /**
     * 
     * @param {string} name is the name of the contact
     * @param {*} phone is the phone number if the contact
     * @param {*} secret_phone is the secret phone number if the contact
     */
    constructor(name, phone, secret_phone) {
        super(name, phone); // this for calling constructor() from the extends class Contact // it is same as // new Contact(name, phone);
        this.secret_phone = secret_phone; // this propoty belong only to VipContact class.
    }
}

// Here started to use my classes

let my_contact_list = new ConstactList();
let my_vip_contact_list = new ConstactList();

const contact = new Contact('Mohamed', 43635234);
const contact1 = new Contact('Gary', 98789666);
const contact2 = new Contact('Gary', 34575234);
const vip_contact = new VipContact("Abo Ismail", 543453426, 4566588);

my_contact_list.addContact(contact);
my_contact_list.addContact(contact1);
my_contact_list.addContact(contact2);
my_vip_contact_list.addContact(vip_contact);

const mohameds_phone = my_contact_list.searchByName("Mohamed");
console.log('Mohamed_phone', mohameds_phone);


console.log(my_contact_list.list_of_contacts);
console.log(my_vip_contact_list.list_of_contacts);

my_contact_list.removeContact(0);

console.log(my_contact_list.list_of_contacts);
