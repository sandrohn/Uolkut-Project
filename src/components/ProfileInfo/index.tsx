import { context } from "../../context/context";

import styles from "./ProfileInfo.module.css";

import star from "../../assets/images/Star.svg";
import smiley from "../../assets/images/Smiley.svg";
import thumbsUp from "../../assets/images/ThumbsUp.svg";
import heart from "../../assets/images/Heart.svg";
import bubble from "../../assets/images/Bubble.svg";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { useEffect, useState, useContext } from "react";

export function ProfileInfo() {
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
    <section className={styles.profileInfoContainer}>
      <header>
        <h2>Boa tarde, {userData?.name} </h2>
        <blockquote>
          <img src={bubble} alt="" />
          <p>Programar sem café é igual poeta sem poesia.</p>
        </blockquote>
      </header>

      <dl className={styles.user_status}>
        <div>
          <dt>Fãs</dt>
          <dd>
            <img src={star} alt="" />
            <span>85</span>
          </dd>
        </div>
        <div>
          <dt>Confiável</dt>
          <dd>
            <img src={smiley} alt="" />
            <img src={smiley} alt="" />
          </dd>
        </div>
        <div>
          <dt>Legal</dt>
          <dd>
            <img src={thumbsUp} alt="" />
            <img src={thumbsUp} alt="" />
            <img src={thumbsUp} alt="" />
          </dd>
        </div>
        <div>
          <dt>Sexy</dt>
          <dd>
            <img src={heart} alt="" />
            <img src={heart} alt="" />
          </dd>
        </div>
      </dl>

      <dl className={styles.user_details}>
        <div>
          <dt>Relacionamento:</dt>
          <dd>{userData?.relationship}</dd>
        </div>
        <div>
          <dt>Aniversário:</dt>
          <dd>{userData?.date}</dd>
        </div>
        <div>
          <dt>Idade:</dt>
          <dd>{userData?.age}</dd>
        </div>
        <div>
          <dt>Quem sou eu:</dt>
          <dd>{userData?.job}</dd>
        </div>
        <div>
          <dt>Moro:</dt>
          <dd>{userData?.city}</dd>
        </div>
        <div>
          <dt>País:</dt>
          <dd>{userData?.country}</dd>
        </div>
        <div>
          <dt>Cidade natal:</dt>
          <dd>{userData?.city}</dd>
        </div>
        <div className={styles.down_div}>
          <div className={styles.multiple_options_field_details}>
            <dt>Músicas:</dt>
            <dd>Trap</dd>
            <dd className={styles.isMobile}>Rap</dd>
            <dd className={styles.isMobile}>Indie</dd>
            <span>Ver todos</span>
          </div>
          <div className={styles.multiple_options_field_details}>
            <dt>Filmes:</dt>
            <dd>A rede social</dd>
            <dd className={styles.isMobile}>Meu amigo totoro</dd>
            <span>Ver todos</span>
          </div>
        </div>
      </dl>
    </section>
  );
}
