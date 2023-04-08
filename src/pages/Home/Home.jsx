import React from 'react';
import Header from '../../components/Header/Header';
import './Home.scss';


import Teacher from '../../assets/tearcher.webp';
import Calendar from '../../components/Calendar/Calendar';
import Notice from '../../components/Notice/Notice';
import Footer from '../../components/Footer/Footer';
import Swipers from '../../components/swiper/Swiper';

function Home() {
  return (
    <>
      <div className="home">
        <div className="content">
          <h1>Aqui seu Filho aprende com os melhores mestres!</h1>
          <span>Matricule seu filho já!</span>
        </div>
      </div>
      <section className='information'>
        <h2>Mestres</h2>
        <div className="professions">
          <div className="mestres">
            <img src={Teacher} alt="" />
            <div className="mestre-infomation">
              <h3>Eduardo</h3>
              <p>
                Formado pela Univercidade Santa
                cruz das Almas, graduado em ciencias
                educacional pela Univercidade Mundo Afora.
                Atua no encino a masi de dez anos.
              </p>

            </div>
          </div>
          <div className="mestres">
            <img src={Teacher} alt="" />
            <div className="mestre-infomation">
              <h3>Eduardo</h3>
              <p>
                Formado pela Univercidade Santa
                cruz das Almas, graduado em ciencias
                educacional pela Univercidade Mundo Afora.
                Atua no encino a masi de dez anos.
              </p>

            </div>
          </div>
          <div className="mestres">
            <img src={Teacher} alt="" />
            <div className="mestre-infomation">
              <h3>Eduardo</h3>
              <p>
                Formado pela Univercidade Santa
                cruz das Almas, graduado em ciencias
                educacional pela Univercidade Mundo Afora.
                Atua no encino a masi de dez anos.
              </p>

            </div>
          </div>
          <div className="mestres">
            <img src={Teacher} alt="" />
            <div className="mestre-infomation">
              <h3>Eduardo</h3>
              <p>
                Formado pela Univercidade Santa
                cruz das Almas, graduado em ciencias
                educacional pela Univercidade Mundo Afora.
                Atua no encino a masi de dez anos.
              </p>

            </div>
          </div>
        </div>
      </section>
      <div>
        <Calendar />

        <div className="status">
          <div className='status-shadow'></div>
          <h2>Entre as melhores</h2>
          <div className='content-status'>
            <p>
              Somos uma das melhores escolas da cidade, aplicamos
              tecnicas de aprendizado avançado, tecnica de conhecimento
              concnitivo, utilizamos os melhores livros com recolhecimento
              mundial, além de atividades recreativas que fixa toda o conhecimento
              adiquirido.
            </p>
            <div className="swipers">
              <Swipers />
            </div>


          </div>
          {/* Swiper */}

        </div>
        <Notice />
        <Footer />

      </div>
    </>
  );
}

export default Home;