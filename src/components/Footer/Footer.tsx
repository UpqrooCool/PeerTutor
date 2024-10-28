import "../../css/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTiktok,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faClock, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faCheck, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="contenido-info">
        <div className="redes">
          <p>Suiguenos en nuestras redes sociales</p>
          <div className="icons">
            <FontAwesomeIcon icon={faFacebook} style={{margin:"3px", background:"#406ca4", color:"white", padding:"8px", borderRadius:"3px"}}/>
            <FontAwesomeIcon icon={faTwitter} style={{margin:"3px", background:"#1da1f2", color:"white", padding:"8px", borderRadius:"3px"}}/>
            <FontAwesomeIcon icon={faInstagram} style={{margin:"3px", background:"#262626", color:"white", padding:"8px", borderRadius:"3px"}}/>
            <FontAwesomeIcon icon={faTiktok} style={{margin:"3px", background:"#69727d", color:"white", padding:"8px", borderRadius:"3px"}}/>
            <FontAwesomeIcon icon={faYoutube} style={{margin:"3px", background:"#cd201f", color:"white", padding:"8px", borderRadius:"3px"}}/>
          </div>
        </div>
        <div className="enlaces">
          <h3>Enlaces útiles</h3>
          <hr />
          <ul>
            <li><FontAwesomeIcon icon={faCheck} style={{fontSize:"20px"}}/> Inicio</li>
            <li><FontAwesomeIcon icon={faCheck} style={{fontSize:"20px"}}/> Nosotros</li>
            <li><FontAwesomeIcon icon={faCheck} style={{fontSize:"20px"}}/> Oferta Educativa</li>
            <li><FontAwesomeIcon icon={faCheck} style={{fontSize:"20px"}}/> Vinculación</li>
          </ul>
        </div>
        <div className="horario">
          <h3>Horario de Atención</h3>
          <hr />
          <ul>
            <li>
              <FontAwesomeIcon icon={faClock} /> Lun - Vie: 07:00 am - 20:00 hrs
            </li>
            <li>
              <FontAwesomeIcon icon={faClock} /> Sáb - Dom: Cerrado
            </li>
          </ul>
        </div>
        <div className="contactanos">
          <h3>Contáctanos</h3>
          <hr />
          <ul>
            <li>
              <FontAwesomeIcon icon={faLocationDot} /> Smza. 255, Mza 11, Lote
              1119-33 77516 Cancún, México
            </li>
            <li>
              <FontAwesomeIcon icon={faPhone} /> 998 283 1859
            </li>
            <li>
              <FontAwesomeIcon icon={faEnvelope} />{" "}
              prensaydifusion@upqroo.edu.mx
            </li>
          </ul>
        </div>
      </div>
      <div className="widget">
        <div className="copyright">
            <p>Copyright © 2023 Universidad Politécnica de Quintana Roo | Powered by Caster Design</p>
        </div>
        <div className="politica">
            <a href="" style={{color:"#fff"}}>politica de privacidad</a>
            <a href="">términos y conidiciones</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
