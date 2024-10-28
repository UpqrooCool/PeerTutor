import "../../css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import GoogleMap from "./GoogleMap";
import SelectTutor from "./SelectTutor";
import Historia from "./Historia";
import CarruselTutores from "./CarruselTutores";
import Tabla from "./TablaTutores"
import FormRegistro from "./FormRegistro";
import FormContacto from "./FormContacto"

// Componente principal de la aplicación
function App() {
  // Estado inicial con algunos tutores
  const [tutors, setTutors] = useState([
    { name: "Jhordin Ucan", img: "../public/ejemplo1.jpg" },
    { name: "Diego Cool", img: "../public/ejemplo2.jpg" },
    { name: "Carlos Catalán", img: "../public/ejemplo3.avif" },
    { name: "Tutor 4", img: "ruta_imagen_4" },
    { name: "Tutor 5", img: "ruta_imagen_5" },
    { name: "Tutor 6", img: "ruta_imagen_6" },
    { name: "Tutor 7", img: "ruta_imagen_7" },
    { name: "Tutor 8", img: "ruta_imagen_8" },
    { name: "Tutor 9", img: "ruta_imagen_9" },
  ]);

  // Función para agregar un nuevo tutor
  const addTutor = (name: string, img: string) => {
    const newTutor = { name, img };
    setTutors([...tutors, newTutor]);
  };

  return (
    <div className="App">
      <div className="historia">
        <Historia/>
      </div>

      <div className="tutores ">
        <h2>Tutores pares</h2>
        <CarruselTutores tutors={tutors} />
      </div>

      {/* Catálogo de asesorías */}
      <div className="catalogo">
        <h2>Catálogo de asesorías</h2>
        <Tabla />
      </div>

      <div className="registro">
        <h2>Registrate a una asesoría</h2>
        <div className="form">
          <FormRegistro />
        </div>
      </div>

      <div className="razon">
        <h2>¡Ayudanos a mejorar</h2>
        <div className="agradecimiento">
          <p>
            Este programa ha sido creado e implementado para ayudar a nuestros
            estudiantes. Nosotros queremos brindarles siempre la mejor atención
            y ayuda posible siempre, por lo que hemos destinado un apartado para
            que puedas otorgarnos una retroalimentación y comentarnos de manera
            anónima lo que piensas del programa, tus quejas o recomendaciones
            para mejorar.
          </p>
          <p>¡Agradecemos todo tu apoyo!</p>
        </div>
        <hr />
      </div>

      <div className="comentario">
        <p>
          Tutor par asesorado <span>(Opcional)</span>
        </p>
        <SelectTutor />
        <textarea
          name="Comentario"
          id="id_comentario"
          placeholder="Agrega aquí tu comentario"
        ></textarea>
        <button>Enviar</button>
      </div>

      <div className="nuestro_equipo">
        <h2>¡Únete a nuestro equipo!</h2>
        <img src="../public/image 3.png" alt="Nuestro Euipo UPQROO" />
        <div className="invitacion">
          <p>
            Estamos activamente buscando estudiantes que quieran apoyar este
            proyecto, así que si tú estás interesado en apoyar a tus compañeros,
            o si ya lo estás haciendo, únete a nuestro equipo de tutores y
            apóyanos a construir una comunidad académica más fuerte.
          </p>
          <p>
            Trabaja con nosotros para construir un entorno de apoyo mutuo y
            ayudar a nuestra comunidad estudiantil a superar sus dificultades
            académicas.
          </p>
          <p>
            La dedicación, pasión y el compromiso de nuestros colaboradores son
            el pilar de este programa.
          </p>
        </div>
        <hr />
        

      <div className="contacto">
        <FormContacto />
      </div>
      
      </div>

      <div className="agradecimiento">
        <h2>Agradecimientos</h2>
        <p>
          Queremos aprovechar este espacio para agradecer a todos aquellos
          personajes, estudiantes, maestros y directivos escolares que han
          apoyado activa y vívidamente a este programa, que se han interesado
          profundamente y han brindado fielmente su apoyo con gran pasión. A
          todas estas personas no queda más que decirles{" "}
          <strong>¡GRACIAS!</strong> porque su apoyo fue el sustento de este
          programa.
        </p>
        <img src="../public/image.png" alt="" />
        <span>
          Reunión de tutores pares (Plantilla de Tutores Pares, Enero-Junio
          2024)
        </span>
        <hr />
      </div>
      <GoogleMap />
    </div>
  );
}

export default App;
