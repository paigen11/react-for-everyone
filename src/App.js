import React from 'react';
import {render} from 'react-dom';
import ContactsList from './ContactsList';

let contacts = [
    {
        id: 1,
        name: 'Paige',
        phone: '123-966-5309'},
    {
        id: 2,
        name: 'Sean',
        phone: '123-456-7890'},
    {
        id: 3,
        name: 'Cindy',
        phone: '314-966-7303'},
    {
        id: 4,
        name: 'George',
        phone: '314-842-8979'},
];

class App extends React.Component {
    render() {
        return (
            <div>
               <h1>Contacts List</h1>
                <ContactsList contacts={this.props.contacts}/>
            </div>
        )
    }
}

render(<App contacts={contacts} />, document.getElementById('app'));