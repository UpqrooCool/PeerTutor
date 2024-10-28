// src/components/StripedColumnsExample.tsx
import Table from "react-bootstrap/Table";

function StripedColumnsExample() {
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
          <tr>
            <td>Jhordin Ucan</td>
            <td>Matemáticas</td>
            <td>Matutino</td>
          </tr>
          <tr>
            <td>Diego Cool</td>
            <td>Química</td>
            <td>Vespertino</td>
          </tr>
          <tr>
            <td>Carlos Catalán</td>
            <td>Contabilidad</td>
            <td>Matutino</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default StripedColumnsExample;
