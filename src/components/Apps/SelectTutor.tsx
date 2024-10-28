import Form from "react-bootstrap/Form";

  function SelectTutor() {
      return (
        <Form.Select aria-label="Default select example" style={{ width: "200px" }}>
          <option disabled selected></option>
          <option value="1">Diego Cool</option>
          <option value="2">Jhordin Ucan</option>
          <option value="3">Carlos Catalán</option>
        </Form.Select>
      );
    }
  
  export default SelectTutor;