import React from 'react';
import Contact from './Contact';

// container that contains the individual contacts themselves
class ContactsList extends React.Component {

    //you must pass props into the constructor and super for it to work
    constructor(props){
        super(props);
        this.state = {
            search: ``,
            contacts: props.contacts
        };
    }

    updateSearch(event) {
        this.setState({search: event.target.value.substring(0, 20)});
    }

    addContact(event) {
        // keep page from refreshing
        event.preventDefault();
        let name = this.refs.name.value;
        let phone = this.refs.phone.value;
        let id = Math.floor((Math.random() * 100) + 1);

        // you should not directly modify an array, you should create a new array with those items
        this.setState({
            // concat will create a new array and set it to contacts (instead of .push on the original array)
            contacts: this.state.contacts.concat({
                id,
                name,
                phone
            })
        });

        this.refs.name.value = '';
        this.refs.phone.value = '';
    }

    render() {
        let filteredContacts = this.state.contacts.filter(
            (contact) => {
                return contact.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
            }
        );

        return (
            <div>
                <input type="text"
                       placeholder="Search"
                       value={this.state.search}
                       onChange={this.updateSearch.bind(this)}/>
                <form onSubmit={this.addContact.bind(this)}>
                    <input type="text" ref="name" />
                    <input type="text" ref="phone" />
                    <button type="submit">Add New Contact</button>
                </form>
                <ul>
                    {filteredContacts.map((contact) => {
                        return <Contact contact={contact} item="hello" key={contact.id}/>
                    })}
                </ul>
            </div>
        )
    }
}

export default ContactsList;