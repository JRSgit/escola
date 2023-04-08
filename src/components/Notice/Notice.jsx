import React from 'react'
import './Notice.scss'

import Student from '../../assets/student.jpeg'


export default function Notice() {
  return (
    <div className='notices'>
      <h1>Jornal Escolar</h1>
      <div className="container">
        <div className="content">
          <div className="notice">
            <h3>Titulo da Noticia</h3>
            <p>Hoje informamos a todos os pais que a escola
              estará realizando no dia 12/05/23 as 14:00
              uma reunião de pais.
              Para podermos falar sobre temas importantes
              a toda a comunidade escolar.
            </p>
          </div>
          <div className="notice">
            <h3>Titulo da Noticia</h3>
            <p>Hoje informamos a todos os pais que a escola
              estará realizando no dia 12/05/23 as 14:00
              uma reunião de pais.
              Para podermos falar sobre temas importantes
              a toda a comunidade escolar.
            </p>
          </div>
        </div>
        <div className="img">
          <img src={Student} alt="" />
        </div>

      </div>
    </div>
  )
}
