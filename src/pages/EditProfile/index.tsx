import {
  collection,
  doc,
  getDocs,
  getFirestore,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { Header } from "../../components/Header";

import { UserProfileEdit } from "../../components/UserProfileEdit";
import styles from "./EditProfile.module.css";
import { firebaseConfig } from "../../services/firebaseConfig";
import { useContext, useState, useEffect } from "react";
import { context } from "../../context/context";
import { Link } from "react-router-dom";

export const EditProfile = () => {
  const { userUid } = useContext(context)!;

  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [job, setJob] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [relationship, setRelationship] = useState("");

  const handleEditForm = async () => {
    try {
      const db = getFirestore(firebaseConfig);
      const usersCollection = collection(db, "users");
      const querySnapshot = await getDocs(
        query(usersCollection, where("uid", "==", userUid)),
      );
      const userDoc = querySnapshot.docs[0].id;
      const docRef = doc(db, "users", userDoc);
      const updateDocFields = {
        name,
        job,
        date,
        country,
        city,
        relationship,
      };
      const update = await updateDoc(docRef, updateDocFields);
      console.log(update);
    } catch (e) {
      console.log(e);
    }
  };

  interface UsersInfo {
    uid: string;
    name: string;
    date: string;
    job: string;
    country: string;
    city: string;
    age: number;
    relationship: string;
  }
  const [userData, setUserData] = useState<UsersInfo | null>();
  const getUserData = async () => {
    try {
      const db = getFirestore();
      const q = query(collection(db, "user"), where("uid", "==", userUid));

      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        setUserData(doc.data() as UsersInfo);
      });
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };
  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div>
      <Header.Root>
        <Header.Profile />
      </Header.Root>
      <section className={styles.container_all_elements}>
        <UserProfileEdit />
        <section className={styles.container_user_edit}>
          <h2>Editar Informações</h2>
          <form onSubmit={handleEditForm}>
            <dl className={styles.user_details}>
              <div className={styles.all_options}>
                <div className={styles.all_inputs}>
                  <div>
                    <input
                      type="text"
                      placeholder={userData?.job}
                      value={job}
                      onChange={(e) => setJob(e.target.value)}
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder={userData?.name}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder={userData?.city}
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder={userData?.country}
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                    />
                  </div>
                  <div>
                    <input
                      type="date"
                      placeholder="DD/MM/AAAA"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                    />
                  </div>
                  <div>
                    <input type="password" placeholder="Senha" />
                  </div>
                  <div>
                    <input type="password" placeholder="Repetir senha" />
                  </div>
                </div>
                <div>
                  <select
                    value={relationship}
                    onChange={(e) => setRelationship(e.target.value)}
                  >
                    <option disabled selected value="">
                      {userData?.relationship}
                    </option>
                    <option>Solteiro</option>
                    <option>Casado</option>
                    <option>Divorciado</option>
                    <option>Namorando</option>
                    <option>Preocupado</option>
                  </select>
                </div>
              </div>
            </dl>
            <div className={styles.button_save}>
              <Link to="/profile">
                <button>Salvar</button>
              </Link>
            </div>
          </form>
        </section>
        <section className={styles.container_elements_profile}></section>
      </section>
    </div>
  );
};
