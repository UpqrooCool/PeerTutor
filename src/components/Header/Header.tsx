import '../../css/Header.css';

const   Header: React.FC = () => {
    return (
        <header>
        <img src="../public/NuevoLogoUPQROO-PNGOFICIAL-1024x410.png" alt="Logo Upqroo" />
        <div className='nav-bar'>
          <ul>
            <li><a href="">Transparencia</a></li>
            <li><a href="">Arm. Contable</a></li>
            <li><a href="">Licitaciones</a></li>
            <li><a href="">Protocolo Acoso</a></li>
            <li><a href="">Archivo y Gestión Documental</a></li>
            <li><a href="">Contraloría Social</a></li>
            <li><a href="">Planeación y Evaluación</a></li>
            <li><a href="">NMX-R-025-SCFI-2015</a></li>
          </ul>
        </div>
        <div className='nav-bar2'>
            <ul>
              <li><a href="">Tu Universiada</a> </li>
              <li><a href="">Oferta Educativa</a></li>
              <li><a href="">Servicios Escolares</a></li>
              <li><a href="">Vinculacón</a></li>
            </ul>
        </div>
        <div className="nav-bar3">
        <h2>Programa Institucional de Tutorias</h2>
      </div>
      </header>
    );
  }; 
  export default Header;