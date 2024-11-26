// src/components/StripedColumnsExample.tsx
import Table from "react-bootstrap/Table";
import { Tutor } from "../../shared/models/tutor.types";

interface TableProps {
  tutors: Tutor[];
}

const CatalogoAsesorias: React.FC<TableProps> = ({ tutors }) => {

  const limitedTutors = tutors.slice(0, 4);

  return (
    <div className="table-container">
      <Table>
        <thead>
          <tr>
            <th>TUTOR</th>
            <th className="darker-cell">MATERIAS OFERTADAS</th>
            <th>TURNO DISPONIBLE</th>
          </tr>
        </thead>
        <tbody>
          {limitedTutors.map((tutor) => (
            <tr key={tutor.id}>
              <td>{tutor.tutor_name}</td>
              <td>{tutor.department}</td>
              <td>{tutor.shift.toUpperCase()}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default CatalogoAsesorias;
