import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Actualites, Calendrier, Classement, Competitions, Equipes, Footer, Header, Joueurs, Statistiques } from './components'
import './App.css'


function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Header />
      </div>
        <Calendrier />
        <Competitions />
        <Classement />
        <Equipes />
        <Joueurs />
        <Statistiques />
        <Actualites />
        <Footer />
      


    </div>
  );
}

export default App