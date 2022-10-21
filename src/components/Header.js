import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <nav className='navbar navbar-expand-sm nabar-dark bg-danger mb-3 py-0'>
        <div className='container'>
            <a href='/' className='navbar-brand'>Liste de contact</a>
        
        <ul className='navbar-nav mr-auto'>
            <li className='nav-item'>
                <a href='/' className='nav-link'>Accueil</a>
            </li>
        </ul>
        </div>
      </nav>
    )
  }
}
