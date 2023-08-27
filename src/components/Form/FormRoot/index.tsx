import logoForm from "../../../assets/images/logo-orkut-simples.svg";

import styles from "./FormRoot.module.css";
import { ReactNode } from "react";

interface FormRootProps {
  children: ReactNode;
  headerText: string;
}

export const FormRoot = ({ children, headerText }: FormRootProps) => {
  return (
    <section className={styles.formRootContainer}>
      <header>
        <img src={logoForm} alt="" />
        <h2>{headerText}</h2>
      </header>

      {children}
    </section>
  );
};
