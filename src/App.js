import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Actualites, Calendrier, Classement, Competitions, Equipes, Footer, Header, Joueurs, Statistiques } from './components'
import './app.css'


function App() {
  return (
    <div className="App">

      <div className="gradient__bg">
        <Header />
      </div>

      <div className="row">
        <div className="col"><Calendrier /></div>
        <div className="col"><Competitions /></div>
      </div>

      <div className="row">
        <div className="col-md-4"><Classement /></div>
        <div className="col-md-8">
          <div className="col-md-6"> <Equipes /></div>
          <div className="col-md-6"><Joueurs /></div>
        </div>

      </div>

      <div>
        <Statistiques />
      </div>

      <div>
        <Actualites />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App