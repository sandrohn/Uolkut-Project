import { Form, Link, useNavigate } from "react-router-dom";

import styles from "./FormAccount.module.css";

export const FormAccount = () => {
  const navigate = useNavigate();

  const handleFormSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    navigate("/");
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
          <input type="name" id="name" placeholder="Nome" required />
        </p>
        <div className={styles.detail_inputs}>
          <p>
            <input type="text" id="date" placeholder="DD/MM/AAAA" required />
          </p>
          <p>
            <input type="text" id="job" placeholder="Profissão" required />
          </p>
        </div>
        <div className={styles.detail_inputs}>
          <p>
            <input type="text" id="ccity" placeholder="País" required />
          </p>
          <p>
            <input type="text" id="country" placeholder="Cidade" required />
          </p>
        </div>
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
        <button type="submit" className={styles.button_continue}>
          Criar conta
        </button>

        <Link to="/">
          <button className={styles.button_back}>Voltar para login</button>
        </Link>
      </fieldset>
    </Form>
  );
};
