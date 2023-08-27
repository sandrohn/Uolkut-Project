import { Form, Link, useNavigate } from "react-router-dom";

import styles from "./FormNewPassword.module.css";

export const FormNewPassword = () => {
  const navigate = useNavigate();

  const handleFormSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    navigate("/");
  };
  return (
    <Form onSubmit={handleFormSubmit}>
      <fieldset>
        <input type="text" placeholder="Informe o código" />
        <input type="password" placeholder="Nova senha" />
        <input type="password" placeholder="Confirme a senha" />
        <button type="submit" className={styles.save_pass}>
          Salvar
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
