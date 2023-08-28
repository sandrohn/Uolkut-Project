import styles from "./ProfileUser.module.css";
import imageUser from "../../assets/images/profileIcon.svg";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { context } from "../../context/context";
import { useEffect, useState, useContext } from "react";

export const UserProfile = () => {
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
    <section className={styles.container_profile_user}>
      <div className={styles.container_desc_img_user}>
        <div className={styles.circle_image_user}>
          <img className={styles.image_user} src={imageUser} alt="" />
        </div>
        <p className={styles.name_user}>{userData?.name}</p>
        <p className={styles.desc_user}>
          {userData?.relationship}, {userData?.country}
        </p>
      </div>
    </section>
  );
};
