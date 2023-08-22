import { Form, Link, useNavigate } from "react-router-dom";
import styles from "./FormAccount.module.css";

export const FormAccount = () => {
  const navigate = useNavigate();

  const handleFormSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    navigate("details");
  };

  return (
    <Form onSubmit={handleFormSubmit} className={styles.formContainer}>
      <fieldset>
        <p>
          <input type="email" id="email" placeholder="Email" required />
        </p>
        <p>
          <input
            type="password"
            id="password"
            placeholder="Senha"
            minLength={8}
            required
          />
        </p>

        <p>
          <input type="text" id="date" placeholder="DD/MM/AAAA" required />
        </p>
        <p>
          <input type="text" id="job" placeholder="Profissão" required />
        </p>
        <p>
          <input type="text" id="ccity" placeholder="País" required />
        </p>
        <p>
          <input type="text" id="country" placeholder="Cidade" required />
        </p>
        <p>
          <select required>
            <option disabled selected value="">
              Relacionamento
            </option>
            <option>Solteiro</option>
            <option>Casado</option>
            <option>Viúvo</option>
          </select>
        </p>
      </fieldset>

      <fieldset>
        <button className={styles.button_continue}>Continuar</button>

        <Link to="/">
          <button className={styles.button_back}>Já tenho uma conta</button>
        </Link>
      </fieldset>
    </Form>
  );
};
