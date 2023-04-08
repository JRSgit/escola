import React, { useEffect } from 'react'
import { useState } from 'react'
import './Events.scss'

import Footer from '../../components/Footer/Footer'

const imgs = [
  <img src="https://images.pexels.com/photos/226737/pexels-photo-226737.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />,
  <img src="https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />,
  <img src="https://images.pexels.com/photos/433452/pexels-photo-433452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />,
  <img src="https://images.pexels.com/photos/796607/pexels-photo-796607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />,
  <img src="https://images.pexels.com/photos/1303081/pexels-photo-1303081.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />,
  <img src="https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />,
  <img src="https://images.pexels.com/photos/431722/pexels-photo-431722.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />,
  <img src="https://images.pexels.com/photos/1303081/pexels-photo-1303081.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />,

]


function Events() {
  //   const [images, setImages] = useState(null)
  //   const cont = imgs.length / 2 

  //   useEffect(() => {
  //     if(cont > imgs.length)
  //     setTimeout(() => {
  //       setImages(images)
  //     },3000)


  //   }, [])

  return (
    <>
      <div className='events'>
        <div className="events-header">
          <div className="animation">
          </div>
          <h1>Alegria de poder levar seu filho para o próximo nível</h1>
          <span>Compartilhadas em nossos eventos</span>
        </div>
        <h1>Nossos Momentos</h1>
        <div className="events-grid">
          {
            imgs.map((img, i) => (
              img
            ))
          }
        </div>

        <div className="next-events-photo">
          <span>Venha participar dos nossos próximos eventos</span>
        </div>

        <div className="events-next">

          <div className="next-event-1">
            <img src="https://images.pexels.com/photos/7169637/pexels-photo-7169637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <div>
              <h3>Titulo do evento</h3>
              <div className="date">
                <span>Data: 13/05 2023</span>
                <span>Horario: 13:00</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Saepe, officia eum placeat, non rem ducimus qui a quam
                tempora id alias eaque eveniet velit recusandae commodi
                expedita quas impedit? Itaque!
              </p>
            </div>
          </div>

          <div className="next-event-2">
            <div>
              <h3>Titulo do evento</h3>
              <div className="date">
                <span>Data: 13/05 2023</span>
                <span>Horario: 13:00</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Saepe, officia eum placeat, non rem ducimus qui a quam
                tempora id alias eaque eveniet velit recusandae commodi
                expedita quas impedit? Itaque!
              </p>
            </div>
            <img src="https://images.pexels.com/photos/7169637/pexels-photo-7169637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          </div>

          <div className="next-event-3">
            <img src="https://images.pexels.com/photos/7169637/pexels-photo-7169637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <div>
              <h3>Titulo do evento</h3>
              <div className="date">
                <span>Data: 13/05 2023</span>
                <span>Horario: 13:00</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Saepe, officia eum placeat, non rem ducimus qui a quam
                tempora id alias eaque eveniet velit recusandae commodi
                expedita quas impedit? Itaque!
              </p>
            </div>
          </div>

          <div className="next-event-4">
            <div>
              <h3>Titulo do evento</h3>
              <div className="date">
                <span>Data: 13/05 2023</span>
                <span>Horario: 13:00</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Saepe, officia eum placeat, non rem ducimus qui a quam
                tempora id alias eaque eveniet velit recusandae commodi
                expedita quas impedit? Itaque!
              </p>
            </div>
            <img src="https://images.pexels.com/photos/7169637/pexels-photo-7169637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          </div>

        </div>

        <Footer />
      </div>
    </>

  )
}

export default Events