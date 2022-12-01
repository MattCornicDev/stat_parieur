import React from 'react'
import './header.css'

const Header = () => {
  return (

    //barre de navigation
    //   <nav className="navbar navbar-expand-xs navbar-expand-md navbar-expand-lg  bg-light">

    //   <div className="container row col-12 col-lg-12 col-md-12 col-sm-12">


    //     <div className="collapse navbar-collapse float-start col-lg-3 col-md-3 col-sm-3" >
    //       <div className="navbar-nav">
    //           <img src="../data/psg.png" className="rounded" alt="..." ></img>
    //           <img src="../data/naples.png" className="rounded imgMilieu" alt="..."></img>
    //           <img src="../data/real.png" className="rounded" alt="..."></img>
    //       </div>
    //     </div>

    //     <div className="collapse navbar-collapse col-auto">
    //       <div className="navbar-nav">
    //         <h1> • LES STATISTIQUES DU FOOTBALL • </h1>
    //       </div>
    //     </div>

    //     <div className="collapse navbar-collapse float-end col-lg-3 col-md-3 col-sm-3" >
    //       <div className="navbar-nav">
    //           <img src="../data/bayern.png" className="rounded" alt="..."></img>
    //           <img src="../data/city.png" className="rounded imgMilieu" alt="..."></img>
    //           <img src="../data/liverpool.png" className="rounded" alt="..."></img>
    //       </div>
    //     </div>

    //   </div>
    // </nav>





    <div className="row text-center bg-light">

      <div className="col-lg-3 col-md-3 col-sm-3 my-3">
        <img src="../data/real.png" className="rounded" alt="..."></img>
        <img src="../data/naples.png" className="rounded imgMilieu" alt="..."></img>
        <img src="../data/psg.png" className="rounded" alt="..." ></img>

      </div>

      <div className="col-lg-6 col-md-6 col-sm-6 my-3">
        <h1>LES STATISTIQUES DU FOOTBALL</h1>
      </div>

      <div className="col-lg-3 col-md-3 col-sm-3 my-3" >
        <img src="../data/bayern.png" className="rounded" alt="..."></img>
        <img src="../data/city.png" className="rounded imgMilieu" alt="..."></img>
        <img src="../data/liverpool.png" className="rounded" alt="..."></img>
      </div>

    </div>





  );
}

export default Header