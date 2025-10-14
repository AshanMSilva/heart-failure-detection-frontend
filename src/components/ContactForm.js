import { useState } from "react";
import { Button, Form } from "react-bootstrap";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Message sent! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };
  return (
    <Form onSubmit={handleSubmit} className="shadow-sm p-4 rounded bg-white">
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter your email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formSubject">
        <Form.Label>Subject</Form.Label>
        <Form.Control
          type="text"
          placeholder="Subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formMessage">
        <Form.Label>Message</Form.Label>
        <Form.Control
          as="textarea"
          rows={5}
          placeholder="Your message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Button variant="primary" className="contactus-button" type="submit">
        Send Message
      </Button>
    </Form>
  );
}
