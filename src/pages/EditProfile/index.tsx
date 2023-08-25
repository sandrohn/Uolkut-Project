import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { HeaderProfile } from "../../components/Header/HeaderProfile";
import { HeaderRoot } from "../../components/Header/HeaderRoot";
import { UserProfile } from "../../components/UserProfile";
import styles from "./EditProfile.module.css";

export const EditProfile = () => {
  return (
    <div>
      <Header.Root>
        <Header.Profile />
      </Header.Root>
      <section className={styles.container_all_elements}>
        <UserProfile />
        <div className={styles.container_user_profile_mobile}></div>
        <section className={styles.container_user_edit}>
          <dl className={styles.user_details}>
            <h2>Editar Informações</h2>
            <div>
              <input type="text" placeholder="Profissão" />
            </div>
            <div>
              <input type="text" placeholder="Nome" />
            </div>
            <div>
              <input type="text" placeholder="Cidade" />
            </div>
            <div>
              <input type="text" placeholder="País" />
            </div>
            <div>
              <input type="text" placeholder="DD/MM/AAAA" />
            </div>
            <div>
              <input type="text" placeholder="Senha" />
            </div>
            <div>
              <input type="text" placeholder="Repetir senha" />
            </div>
            <div>
              <select required>
                <option disabled selected value="">
                  Relacionamento
                </option>
                <option>Solteiro</option>
                <option>Casado</option>
                <option>Divorciado</option>
                <option>Namorando</option>
                <option>Preocupado</option>
              </select>
            </div>
          </dl>
          <Button />
        </section>
        <section className={styles.container_elements_profile}></section>
      </section>
    </div>
  );
};
