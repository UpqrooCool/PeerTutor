// src/components/Historia.tsx
import '../../css/App.css'

const Historia = () => {
  return (
    <div className="historia">
      <h2>Historia y Objetivos</h2>
      <div className="contenido_imagen">
        <div className="algebra">
          <img src="../public/imagen.png" alt="" />
          <span>Asesoría Algebra (Erick López, 2024)</span>
        </div>
        <div className="parrafo_1">
          <p>
            Durante el 2022, dos estudiantes de primer cuatrimestre, Eduardo Che y Leonardo Rodríguez, iniciaron este programa de manera informal. En conjunto, ofrecieron más de 20 asesorías a estudiantes de Ingeniería Financiera, Ingeniería en Software y Administración de Empresas, con el objetivo de apoyar a sus compañeros que enfrentaban dificultades académicas.
          </p>
          <p>
            Desde entonces, el programa ha evolucionado para brindar un apoyo más estructurado a la comunidad estudiantil, ofreciendo también reconocimiento a aquellos que, con sus habilidades, ayudan a otros a superar sus retos académicos.
          </p>
        </div>
      </div>
      <div className="parrafo_2">
        <p>
          El principal objetivo del programa es asistir a los estudiantes que necesitan reforzar temas de las materias en curso, ayudándoles a comprender mejor sus estudios y evitar dificultades académicas. A través de las asesorías, se busca mejorar la comprensión de los contenidos, facilitar el progreso académico, y reducir los índices de reprobación y deserción.
        </p>
      </div>
      <div className="imagen_leo">
        <img src="../public/tutorias.png" alt="" />
        <span>Asesorías de Matematicas Discretas (Leonardo Rodríguez, 2022)</span>
      </div>
    </div>
  );
};

export default Historia;
