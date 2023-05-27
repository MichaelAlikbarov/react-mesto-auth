import { useState } from "react";
import { Link } from "react-router-dom";

export default function Register({ handleRegister }) {
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    const { email, password } = formValue;
    e.preventDefault();
    handleRegister(email, password);
  };

  return (
    <>
      <div className="form-container">
        <p className="form-container__title">Регистрация</p>
        <form className="form-container__form" onSubmit={handleSubmit}>
          <input
            className="form-container__input"
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            required
            value={formValue.email}
            onChange={handleChange}
          />
          <input
            className="form-container__input"
            id="password"
            name="password"
            type="password"
            placeholder="Пароль"
            required
            value={formValue.password}
            onChange={handleChange}
          />
          <button className="form-container__button">
            <p className="form-container__button-title">Зарегистрироваться</p>
          </button>
        </form>
        <div className="form-container__signature">
          <p className="form-container__signature-title">
            Уже зарегистрированы?
          </p>
          <Link to="/signin" className="form-container__login-link">
            <p className="form-container__signature-subtitle">Войти</p>
          </Link>
        </div>
      </div>
    </>
  );
}
