import React from 'react'
import './Year.scss'

export default function Year(props) {
  const { year, seg, ter, qua, qui, sex } = props
  return (
    <div className="year">
      <div className="yearSelect"><h1>{year || '1 Ano'}</h1></div>
      <div className="content">
        <div className="day">
          <strong>Seg:</strong><span>{seg || "havera"} </span><small></small>
        </div>
        <div className="day">
          <strong>Ter:</strong><span>{ter || "havera ate as 16:00"}</span><small></small>
        </div>
        <div className="day">
          <strong>Qua:</strong><span>{qua || "Não havera"}</span><small></small>
        </div>
        <div className="day">
          <strong>Qui:</strong><span>{qui || "havera"}</span><small></small>
        </div>
        <div className="day">
          <strong>Sex:</strong><span>{sex || "havera"}</span><small></small>
        </div>
      </div>
    </div>
  )
}
