import { InputSearch } from "../../InputSearch";
import styles from "./HeaderProfile.module.css";

import profileSettingsIcon from "../../../assets/images/profileIcon.svg";
import caretDownSettingsIcon from "../../../assets/images/CaretDown.svg";

import { context } from "../../../context/context";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { useEffect, useState, useContext } from "react";

export const HeaderProfile = () => {
  const { userUid } = useContext(context)!;

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
    <>
      <nav className={styles.nav}>
        <ul>
          <li>Início</li>
          <li className={styles.profile_nav}>Perfil</li>
          <li>Comunidades</li>
          <li>Jogos</li>
        </ul>
      </nav>

      <InputSearch className="isDesktop" />

      <div className={styles.settings_container}>
        <img src={profileSettingsIcon} alt="" />
        <p>{userData?.name}</p>
        <img src={caretDownSettingsIcon} alt="" />
      </div>
    </>
  );
};
