import React from 'react'
import './header.css'

const Header = () => {
  return (

    //barre de navigation
    <nav className="navbar navbar-expand-xs navbar-expand-md navbar-expand-lg  bg-light">
    
    <div className="container row col-12 col-lg-12 col-md-12 col-sm-12">
      
        
      <div className="collapse navbar-collapse float-start col-lg-3 col-md-3 col-sm-3" >
        <div className="navbar-nav">
            <img src="../data/psg.png" class="rounded" alt="..." ></img>
            <img src="../data/naples.png" class="rounded imgMilieu" alt="..."></img>
            <img src="../data/real.png" class="rounded" alt="..."></img>
        </div>
      </div>

      <div className="collapse navbar-collapse col-auto">
        <div className="navbar-nav">
          <h1> • LES STATISTIQUES DU FOOTBALL • </h1>
        </div>
      </div>

      <div className="collapse navbar-collapse float-end col-lg-3 col-md-3 col-sm-3" >
        <div className="navbar-nav">
            <img src="../data/bayern.png" class="rounded" alt="..."></img>
            <img src="../data/city.png" class="rounded imgMilieu" alt="..."></img>
            <img src="../data/liverpool.png" class="rounded" alt="..."></img>
        </div>
      </div>
      
    </div>
  
  </nav>
         
        
  );
} 

export default Header