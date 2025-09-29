import { Modal, Button, Form, Spinner } from "react-bootstrap";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestPrediction } from "../store/actions/predictionActions";
import { useNavigate } from "react-router-dom";

export default function PredictionForm({ show, onHide }) {
  const [formData, setFormData] = useState({
    age: "",
    sex: "",
    ecg_file: null,
    ecg_header: null,
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.prediction);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({ ...prev, [name]: files ? files[0] : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    const submitData = new FormData();
    submitData.append("age", parseInt(formData.age, 10));
    submitData.append("sex", formData.sex);
    submitData.append("ecg_file", formData.ecg_file);
    submitData.append("ecg_header", formData.ecg_header);

    dispatch(requestPrediction({submitData, navigate}));
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Upload Data for Prediction</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>Age</Form.Label>
            <Form.Control
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              min={0}
              step={1}
              placeholder="Enter Age"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="sex">
            <Form.Label>Gender</Form.Label>
            <Form.Select
              name="sex"
              value={formData.sex || ""}
              onChange={handleChange}
              required
            >
              <option value="">Select Gender</option>
              <option value="1">Male</option>
              <option value="0">Female</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>ECG File (.dat)</Form.Label>
            <Form.Control
              type="file"
              name="ecg_file"
              onChange={handleChange}
              accept=".dat"
              placeholder="Upload ECG File (.dat format)"
              required
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>ECG Header (.hea)</Form.Label>
            <Form.Control
              type="file"
              name="ecg_header"
              onChange={handleChange}
              accept=".hea"
              placeholder="Upload ECG Header (.hea format)"
              required
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            Cancel
          </Button>
          <Button variant="danger" type="submit" disabled={loading}>
            {loading ? <Spinner animation="border" size="sm" /> : "Submit"}
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}
