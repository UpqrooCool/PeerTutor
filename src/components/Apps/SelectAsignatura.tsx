import Form from "react-bootstrap/Form";
function SelectAsignatura() {
    return (
      <Form.Select aria-label="Default select example" style={{ width: "200px" }}>
        <option disabled selected></option>
        <option value="1">Matematicas</option>
        <option value="2">Quimica</option>
        <option value="3">Alebra</option>
      </Form.Select>
    );
  }

export default SelectAsignatura;