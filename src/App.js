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

      <div className="row m-3">
        <div className="col-md-4"><Calendrier /></div>
        <div className="col-md-8"><Competitions /></div>
      </div>

      <div className="row m-3">
        <div className="col-md-4"><Classement /></div>
        <div className="col-md-8">
          <div> <Equipes /></div>
          <div><Joueurs /></div>
        </div>

      </div>

      <div className="row m-3">
        <div className="col-md-12">
          <Statistiques />
        </div>
      </div>

      <div className="row m-3">
        <div className="col-md-12">
          <Actualites />
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <Footer />
        </div>
      </div>
    </div >
  );
}

export default App