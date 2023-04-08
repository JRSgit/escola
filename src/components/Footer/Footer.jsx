import React from 'react';

import './Footer.scss';

function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <h1>Sua Escola</h1>
        <p>
          A Escola Municipal de Banco Central
          deseja a todos os alunos, pais e comunidade um
          ano letivo de prosperidade e paz.
        </p>
        <div>
          <a href="">Youtube</a>
          <a href="">Facebook</a>
          <a href="">Instagram</a>
        </div>

      </div>
      <p>Copyright © 2023. Todos os direitos resevados JRScode.</p>
    </div>
  );
}

export default Footer;