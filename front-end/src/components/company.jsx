import React, { useState } from "react";
import axios from "axios";// Asegúrate de tener el archivo CSS importado

const Company = () => {
  const [formData, setFormData] = useState({
    company: "",
    username: "",
    email: "",
    password: "",
    logo: ""
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/company", formData);
      setSuccess(response.data.message);
      setError("");
      setFormData({
        company: "",
        username: "",
        email: "",
        password: "",
        logo: ""
      });
    } catch (err) {
      setError("Error al crear la empresa.");
      setSuccess("");
    }
  };

  return (
    <div className="page-content">
      <div className="form-v5-content">
        <div className="form-detail">
          <h2>Registrar Empresa</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <label htmlFor="company">Empresa</label>
              <input
                type="text"
                className="input-text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-row">
              <label htmlFor="username">Nombre de usuario</label>
              <input
                type="text"
                className="input-text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-row">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="input-text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-row">
              <label htmlFor="password">Contraseña</label>
              <input
                type="password"
                className="input-text"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-row">
              <label htmlFor="logo">Logo</label>
              <input
                type="text"
                className="input-text"
                name="logo"
                value={formData.logo}
                onChange={handleChange}
              />
            </div>

            <div className="form-row-last">
              <input
                type="submit"
                className="register"
                value="Registrar"
              />
            </div>
          </form>

          {error && <div className="error">{error}</div>}
          {success && <div className="success">{success}</div>}
        </div>
      </div>
    </div>
  );
};

export default Company;
