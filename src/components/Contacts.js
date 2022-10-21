import React, { Component } from 'react'
import Contact from './Contact'

export default class Contacts extends Component {

    state = {
        contacts: [
            {
                id: 1,
                nom: 'Rarib LAAMIMAT',
                email: 'glgharib@gmail.com',
                tel: '0600334455'
            },
            {
                id: 2,
                nom: 'Patrcik JEREMY',
                email: 'patrick@gmail.com',
                tel: '0734292345'
            },
            {
                id: 3,
                nom: 'Christopher NOLAN',
                email: 'christohper@gmail.com',
                tel: '0622334455'
            }
        ]
    }


  render() {
    return (
      <div>
        {this.state.contacts.map(contact => (
            <Contact
                key={contact.id}
                nom={contact.nom}
                email={contact.email}
                tel={contact.tel}
             />
            
        ))}
      </div>
    )
  }
}
