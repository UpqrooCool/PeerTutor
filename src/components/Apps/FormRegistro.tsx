// src/components/FormRegistro.tsx
import * as formik from "formik";
import * as yup from "yup";
import { Form, Row, Col, Button, FormGroup } from "react-bootstrap";
import SelectTutor from "./SelectTutor";
import SelectAsignatura from "./SelectAsignatura";

function FormRegistro() {
  const { Formik } = formik;
  const schema = yup.object().shape({
    Name: yup.string().required(),
    Group: yup.string().required(),
    contact: yup.string().required(),
  });
  return (
    <Formik
      validationSchema={schema}
      onSubmit={console.log}
      initialValues={{
        Name: "",
        Group: "",
        Schedule: "",
      }}
    >
      {({ handleSubmit, handleChange, touched, errors }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Label
              style={{ fontSize: "20px", fontWeight: "bold", color: "#500000" }}
            >
              Nombre Completo
            </Form.Label>
            <Form.Control
              type="text"
              name="Name"
              placeholder="Ej. Patricio Hernández de la Rosa"
              isValid={touched.Name && !errors.Name}
            />

            <Form.Label
              style={{
                marginTop: "15px",
                fontSize: "20px",
                fontWeight: "bold",
                color: "#500000",
              }}
            >
              Grupo
            </Form.Label>
            <Form.Control
              type="text"
              name="Group"
              placeholder="Ej. 23HM"
              onChange={handleChange}
              isValid={touched.Group && !errors.Group}
            />
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="9" className="Group">
              <Form.Label
                style={{
                  marginTop: "15px",
                  fontSize: "20px",
                  fontWeight: "bold",
                  color: "#500000",
                  marginRight: "90px",
                }}
              >
                Tutor
                <SelectTutor />
              </Form.Label>

              <Form.Label
                style={{
                  marginTop: "15px",
                  fontSize: "20px",
                  fontWeight: "bold",
                  color: "#500000",
                }}
              >
                Materia
                <SelectAsignatura />
              </Form.Label>
            </Form.Group>
          </Row>

          {/* Horario con calendario de casillas */}
          <Form.Label
            style={{
              marginTop: "15px",
              fontSize: "20px",
              fontWeight: "bold",
              color: "#500000",
            }}
          >
            Horario
          </Form.Label>

          {/* Aquí se agrega la tabla de disponibilidad */}
          <div className="table-schedule">
            <table>
              <thead>
                <tr>
                  <th>Inicio</th>
                  <th>Lunes</th>
                  <th>Martes</th>
                  <th>Miércoles</th>
                  <th>Jueves</th>
                  <th>Viernes</th>
                </tr>
              </thead>
              <tbody>
                {[
                  "7 a.m.",
                  "8 a.m.",
                  "9 a.m.",
                  "10 a.m.",
                  "11 a.m.",
                  "12 p.m.",
                  "1 p.m.",
                ].map((time, index) => (
                  <tr key={index}>
                    <td>{time}</td>
                    {[...Array(5)].map((_, dayIndex) => (
                      <td key={dayIndex}>
                        <input type="checkbox" className="checkbox" />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="legend">
              <span className="legend-item">
                <span className="square gray"></span> No Disponible
              </span>
              <span className="legend-item">
                <span className="square white"></span> Disponible
              </span>
              <span className="legend-item">
                <span className="square orange"></span> Elegido
              </span>
            </div>
          </div>

          <FormGroup
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "48px",
            }}
          >
            <hr
              style={{
                flex: 1,
                borderTop: "3px solid #500000",
                margin: "0 10px",
              }}
            />
            <span style={{ whiteSpace: "nowrap", color: "#000" }}>
              Esta acción te añadirá a una lista de asistencia
            </span>
            <hr
              style={{
                flex: 1,
                borderTop: "3px solid #500000",
                margin: "0 10px",
              }}
            />
            <Button
              style={{
                fontFamily: "Poppins",
                background: "#500000",
                color: "white",
                border: "none",
                width: "130px",
                height: "60px",
                borderRadius: "16px",
              }}
              type="submit"
            >
              Registrarme
            </Button>
          </FormGroup>
        </Form>
      )}
    </Formik>
  );
}

export default FormRegistro;
