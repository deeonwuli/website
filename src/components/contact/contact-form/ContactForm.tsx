import axios from "axios";
import { useState } from "react";
import styled from "styled-components";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    string | { message: string; type: "error" | "success" }
  >();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await axios.post(
        "http://localhost:5001/send-email",
        formData
      );
      setStatus(response.data.message);
      setFormData({ name: "", email: "", message: "" }); // Clear form
    } catch (error) {
      console.error(error);
      setStatus("Failed to send message.");
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <input
        value={formData.name}
        onChange={handleChange}
        name="name"
        type="text"
        placeholder="Name"
        required={true}
      />
      <input
        value={formData.email}
        onChange={handleChange}
        name="email"
        type="email"
        placeholder="Email"
        required={true}
      />
      <textarea
        value={formData.message}
        onChange={handleChange}
        name="message"
        rows={5}
        placeholder="Message"
        required={true}
      />
      {status && typeof status === "object" ? (
        <p style={{ color: status.type === "error" ? "red" : "green" }}>
          {status.message}
        </p>
      ) : (
        <p>{status}</p>
      )}
      <StyledButton
        type="submit"
        disabled={!formData.email || !formData.message || !formData.name}
      >
        Submit
      </StyledButton>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 3rem;
  width: 75%;
  margin-top: 2rem;
`;

const StyledButton = styled.button`
  background-color: ${(props) => props.theme.palette.common.salmon300};
  color: ${(props) => props.theme.palette.common.white};
`;
