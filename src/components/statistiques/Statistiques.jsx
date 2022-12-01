import React, { useState, useEffect } from 'react'
import './statistiques.css'
import axios from 'axios'
import { FC } from 'react'



const Statistiques = (props) => {

  const [data, setData] = useState([]);
  const fetchData = () => {
    axios
      .get('https://v3.football.api-sports.io/status')
      .then((res) => {
        console.log(res)
        setData(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <div className="card w-auto">
        <div className="card-body">
          <h5 className="card-title">Statistiques</h5>
          <h6 className='card-subtitle mb-2 text-muted'>Retrouver les stats</h6>
          <p className='card-text'></p>
          <p className='card-text'></p>
        </div>
      </div>
    </>
  )
}

export default Statistiques