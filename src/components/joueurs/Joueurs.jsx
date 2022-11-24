import React from 'react'
import './joueurs.css'

const Joueurs = () => {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Joueurs</h5>
          <h6 className='card-subtitle mb-2 text-muted'>Selectionner une competitions</h6>
          <p className='card-text'>Ligue 1 | ligue 2 | ligue 3 | Premier Ligue | La Liga | Serie A | Bundesliga</p>
          <p className='card-text'>Ligue des Champions | Ligue Europa | Ligue Europa Conférence | Coupe de France</p>
        </div>
      </div>
    </>
  )
}

export default Joueurs