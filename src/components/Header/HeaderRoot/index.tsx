import { ReactNode } from "react";
import logo from "../../../assets/images/logo-orkut.svg";
import styles from "./HeaderRoot.module.css";
import { Link } from "react-router-dom";

interface HeaderRootProps {
  children?: ReactNode;
}

export const HeaderRoot = ({ children }: HeaderRootProps) => {
  return (
    <header className={`${styles.header}`}>
      <h1>
        <Link to={"/"}>
          <img src={logo} alt="" />
        </Link>
      </h1>

      {children}
    </header>
  );
};
