import { Form, Link, useNavigate } from "react-router-dom";
import React, { FormEvent, useState } from "react";

import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import styles from "./FormLogin.module.css";
import { auth } from "../../../services/firebaseConfig";

export const FormLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  function handleSignIn(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    createUserWithEmailAndPassword(email, password);
  }
  const navigate = useNavigate();

  // function authLogin(e: FormEvent<HTMLFormElement>) {
  //   e.preventDefault();
  //   if (!email || !password) {
  //     alert("Error: Preencha todos os campos");
  //   } else {
  //     navigate("/profile");
  //   }
  // }
  const handleFormSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    navigate("profile");
  };

  return (
    <Form onSubmit={handleFormSubmit} className={styles.formLoginContainer}>
      <fieldset>
        <p>
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </p>
        <p>
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </p>
        <p className={styles.checkboxContainer}>
          <input type="checkbox" name="remember-password" />
          <label htmlFor="remember-password">Lembrar minha senha</label>
        </p>
      </fieldset>

      <fieldset>
        <button onClick={handleSignIn} className={styles.button_login}>
          Entrar na conta
        </button>

        <Link to="/register">
          <button className={styles.button_register}>Criar uma conta</button>
        </Link>

        <a href="#">Esqueci a minha senha</a>
      </fieldset>
    </Form>
  );
};
