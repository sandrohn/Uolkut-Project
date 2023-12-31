import { Form, Link, useNavigate } from "react-router-dom";
import React, { useContext, useState } from "react";

import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import styles from "./FormLogin.module.css";
import { context } from "../../../context/context";

export const FormLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMesage] = useState("");

  const { setUserUid } = useContext(context)!;

  const handleLoginForm = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUserUid(userCredential.user?.uid);
        console.log(user);
        navigate("/profile");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        setErrorMesage("Usuário não cadastrado ou senha inválida");
      });
  };

  const navigate = useNavigate();

  return (
    <Form onSubmit={handleLoginForm} className={styles.formLoginContainer}>
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
        {errorMessage && <p className={styles.errorText}>{errorMessage}</p>}

        <p className={styles.checkboxContainer}>
          <input type="checkbox" name="remember-password" />
          <label htmlFor="remember-password">Lembrar minha senha</label>
        </p>
      </fieldset>

      <fieldset>
        <button className={styles.button_login}>Entrar na conta</button>

        <Link to="/register">
          <button className={styles.button_register}>Criar uma conta</button>
        </Link>
        <Link to="/recover">
          <a>Esqueci a minha senha</a>
        </Link>
      </fieldset>
    </Form>
  );
};
