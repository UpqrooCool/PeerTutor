import "../../css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useMemo } from "react";
import GoogleMap from "./GoogleMap";
import Historia from "./Historia";
import CarruselTutores from "./CarruselTutores";
import CatalogoAsesorias from "./CatalogoAsesorias";
import RegistroAsesorias from "./RegistroAsesoria";
import FormContacto from "./FormContacto";
import { useApi } from "../../shared/hooks/useApi";
import { ApiService } from "../../services/api.services";
import { Tutor } from "../../shared/models/tutor.types";
import { Log } from "../../shared/models/log.types";
import FormFeedBack from "./FormFeedBack";

function App() {
  const apiService = useMemo(
    () => new ApiService("http://localhost:3000/api/public"),
    []
  );

  const {
    fetchAll,
    list: tutors,
    loading: loadingTutors,
  } = useApi<Tutor>(apiService, "/tutors");

  const { create, loading: creating } = useApi<Log>(apiService, "/logs");

  useEffect(() => {
    fetchAll();
  }, [fetchAll]);

  const handleCreate = async (Log: Partial<Log>) => {
    await create(Log);
  };

  return (
    <div className="App">
      <div className="historia">
        <Historia />
      </div>

      <div className="tutores ">
        <h2>Tutores pares</h2>
        <CarruselTutores />
      </div>

      <div className="catalogo">
        <h2>Catálogo de asesorías</h2>
        <CatalogoAsesorias tutors={tutors} />
      </div>

      <div className="registro">
        <h2>Registrate a una asesoría</h2>
        <RegistroAsesorias
          tutors={tutors}
          isLoadingTutors={loadingTutors}
          isCreating={creating}
          onCreate={handleCreate}
        />
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
          Tutor par que te ha asesorado
        </p>
        <FormFeedBack tutors={tutors} isLoadingTutors={loadingTutors} />
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
          profundamente y han brindado fielmente su apoyo con gran pasión.{" "}
          <br /> A todas estas personas no queda más que decirles{" "}
          <strong>¡GRACIAS!</strong> porque su apoyo fue el sustento de este
          programa.
        </p>
        <div>
          <img src="../public/image.png" alt="" />
          <span className="justify-end w-4/5 pb-4 mt-[-24px] pr-24 text-gray-400">
            Reunión de tutores pares (Plantilla de Tutores Pares, Enero-Junio
            2024)
          </span>
        </div>
        <hr />
      </div>
      <div className="map-container mt-8">
        <GoogleMap />
      </div>
    </div>
  );
}

export default App;
