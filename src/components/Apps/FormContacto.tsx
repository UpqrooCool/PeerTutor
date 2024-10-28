
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import * as formik from "formik";
import * as yup from "yup";
import { FormGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";


function FormContacto() {
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
          contact: "",
        }}
      >
        {({ handleSubmit, handleChange, touched, errors }) => (
          <Form
            style={{ width: "70%", margin: "auto", marginTop: "40px" }}
            noValidate
            onSubmit={handleSubmit}
          >
            <Row className="mb-3">
              <Form.Label style={{ fontFamily: "Poppins", fontWeight: "bold" }}>
                Número de contacto
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  style={{ marginLeft: "8px", color: "black", fontSize: "20px" }}
                />
              </Form.Label>
              <Form.Control
                type="text"
                name="contact"
                placeholder="Ej. 9988 xxxx xx"
                isValid={touched.contact && !errors.contact}
                style={{ width: "500px", height: "50px" }}
              />
  
              <FormGroup style={{ display: "flex", margin: "20px 0" }}>
                <FormGroup style={{ marginRight: "80px" }}>
                  <Form.Label
                    style={{
                      fontFamily: "Poppins",
                      fontWeight: "bold",
                      marginTop: "20px",
                    }}
                  >
                    Nombre
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="Group"
                    placeholder="Ej. Hernán Murillo"
                    onChange={handleChange}
                    isValid={touched.Group && !errors.Group}
                    style={{ margin: "0", width: "500px", height: "50px" }}
                  />
                </FormGroup>
  
                <FormGroup>
                  <Form.Label
                    style={{
                      fontFamily: "Poppins",
                      fontWeight: "bold",
                      marginTop: "20px",
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
                    style={{ height: "50px" }}
                  />
                </FormGroup>
              </FormGroup>
            </Row>
            <hr />
            <FormGroup style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ textAlign: "center", margin: "24px" }}>
                Al enviar este formulario, un miembro de nuestro equipo se pondrá
                en contacto contigo a través de WhatsApp o tu correo institucional
              </span>
              <Button
                type="submit"
                style={{
                  background: "#400000",
                  width: "150px",
                  height: "60px",
                  border: "none",
                  borderRadius: "16px",
                  margin: "auto",
                }}
              >
                Enviar
              </Button>
            </FormGroup>
          </Form>
        )}
      </Formik>
    );
  }

  export default FormContacto;