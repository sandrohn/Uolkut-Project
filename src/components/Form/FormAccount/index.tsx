import { Form } from "react-router-dom";
import React, { FormEvent, useState, useEffect } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";

import styles from "./FormAccount.module.css";
import { auth, firebaseConfig } from "../../../services/firebaseConfig";
import { addDoc, collection, getFirestore } from "firebase/firestore";

export const FormAccount = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [job, setJob] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [relationship, setRelationship] = useState("");

  const lovers = [
    "Solteiro",
    "Casado",
    "Divorciado",
    "Namorando",
    "Preocupado",
  ];

  function calculateAge(birthdayDate: string) {
    const today = new Date();
    const birthDate = new Date(birthdayDate);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    return age;
  }

  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);
  const [loading, setLoading] = useState(false);

  const db = getFirestore(firebaseConfig);
  const userCollectionRef = collection(db, "user");

  async function handleCreateAccount() {
    setLoading(true);
    try {
      const create = await createUserWithEmailAndPassword(email, password);
      const user = create?.user;
      const age = calculateAge(date);

      await addDoc(userCollectionRef, {
        uid: user?.uid,
        name,
        date,
        job,
        country,
        city,
        age,
        relationship,
      });

      setLoading(false);
      console.log(user);
      setEmail("");
      setPassword("");
      setCity("");
      setName("");
      setCountry("");
      setJob("");
      setDate("");
      setRelationship("");
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  return (
    <Form className={styles.formContainer}>
      <fieldset className={styles.all_content}>
        <p>
          <input
            type="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </p>
        <p>
          <input
            type="password"
            id="password"
            placeholder="Senha"
            minLength={8}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </p>
        <p>
          <input
            type="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nome"
            required
          />
        </p>
        <div className={styles.both_div}>
          <div className={styles.left_div}>
            <p>
              <input
                type="date"
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                placeholder="DD/MM/AAAA"
                required
              />
            </p>
            <p>
              <input
                type="text"
                id="country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                placeholder="País"
                required
              />
            </p>
          </div>
          <div className={styles.right_div}>
            <p>
              <input
                type="text"
                id="job"
                value={job}
                onChange={(e) => setJob(e.target.value)}
                placeholder="Profissão"
                required
              />
            </p>
            <p>
              <input
                type="text"
                id="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Cidade"
                required
              />
            </p>

            <p>
              <select
                value={relationship}
                onChange={(e) => setRelationship(e.target.value)}
              >
                <option value="" disabled>
                  Relacionamento
                </option>
                {lovers.map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            </p>
          </div>
        </div>
      </fieldset>

      <fieldset>
        <button
          type="submit"
          onClick={handleCreateAccount}
          className={styles.button_continue}
        >
          Criar conta
        </button>
      </fieldset>
    </Form>
  );
};
