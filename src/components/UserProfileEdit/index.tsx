import imageUser from "../../assets/images/profileIcon.svg";
import EditPic from "../../assets/images/EditPencil.svg";
import styles from "./UserProfileEdit.module.css";
export const UserProfileEdit = () => {
  return (
    <section className={styles.container_profile_user}>
      <div className={styles.container_desc_img_user}>
        <div className={styles.circle_image_user}>
          <img className={styles.image_user} src={imageUser} alt="" />
        </div>
        <img src={EditPic} className={styles.EditLogo} alt="" />
      </div>
    </section>
  );
};
