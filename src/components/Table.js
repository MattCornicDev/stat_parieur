import React, { Component } from 'react'
import Contact from './Contact'

export default class Table extends Component {
    render() {
        return (
            <>
            <div className="p-5 bg-primary text-white text-center">
                <h1>Stat Parieur</h1>
                <p>Site de statistique des joueurs pro !</p>
            </div><nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                    <div className="container-fluid">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Qques liens</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Lien</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Lien</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#">Desactivé</a>
                            </li>
                        </ul>
                    </div>
                </nav><div className="container mt-5">
                    <div className="row">
                        <div className="col-sm-4">
                            <h2>A propos</h2>
                            <h5>Photo of me:</h5>
                            <div className="fakeimg">Image</div>
                            <p>Ici un petit text..</p>
                            <h3 className="mt-4">Autres Liens</h3>
                            <p>Lorem ipsum dolor sit ame.</p>
                            <ul className="nav nav-pills flex-column">
                                <li className="nav-item">
                                    <a className="nav-link active" href="#">Active</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Lien</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Lien</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link disabled" href="#">Disabled</a>
                                </li>
                            </ul>
                            <hr className="d-sm-none" />
                        </div>
                        <div className="col-sm-8">
                            <h2>TITRE EN-TETE</h2>
                            <h5>Titre description, le 27 oct, 2022</h5>
                            <div className="fakeimg">Image</div>
                            <p>Un peu de text..</p>
                            <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>

                            <h2 className="mt-5">TITRE EN-TETE</h2>
                            <h5>Titre description, le 27 oct, 2022</h5>
                            <div className="fakeimg">Image</div>
                            <p>Un peu de text..</p>
                            <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                        </div>
                    </div>
                    <Contact />
                </div><div className="mt-5 p-4 bg-dark text-white text-center">
                    <p>Footer</p>
                </div>
                </>
        )
    }
}
