import React from 'react'
import "./footer.css";

function Footer() {
  return (
    <div class="footer">
      <footer>
        <ol>
          <li>
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              <img src="./img/facebook.svg.svg" alt="facebook" class="tamañoIconos"/>
            </a>
          </li>

          <li>
            <a href="https://www.instagram.com/tea.blends.organicos/" target="_blank" rel="noreferrer">
              <img src="./img/instagram.svg.svg" alt="instagram" class="tamañoIconos"/>
            </a>
          </li>

          <li>
            <a href="https://twitter.com/?lang=es" target="_blank" rel="noreferrer">
              <img src="./img/twitter.svg.svg" alt="twitter" class="tamañoIconos"/>
            </a>
          </li>

          <li>
            <a href="https://wa.me/5492214955842" target="_blank" rel="noreferrer" >
              <img src="./img/whatsapp.svg" alt="whatsapp" class="tamañoIconos"/>
            </a>
          </li>
        </ol>
      </footer>
    </div>
  )
}

export default Footer