import { Form, Link, useNavigate } from "react-router-dom";

import styles from "./FormRecover.module.css";

export const FormRecover = () => {
  const navigate = useNavigate();

  const handleFormSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    navigate("newpassword");
  };
  return (
    <Form onSubmit={handleFormSubmit}>
      <fieldset>
        <input type="email" placeholder="Email Cadastrado" />
      </fieldset>
      <fieldset>
        <button type="submit" className={styles.button_send}>
          Enviar código
        </button>
      </fieldset>
      <fieldset className={styles.bottom_container}>
        <h5>Lembrou sua senha?</h5>
        <Link to="/">
          <button>Entrar com as credênciais</button>
        </Link>
      </fieldset>
    </Form>
  );
};
