import Image from "next/image";
import styles from "./styles.module.scss";
import ProfileImage from "../ProfileImage/ProfileImage";
import NavLinks from "../NavLinks/NavLinks";
import ProfileLinks from "../ProfileLinks/ProfileLinks";

const ProfileSideMenu = ({ close, isOpen }) => {
  return (
    <div
      className={isOpen ? styles.profileSideMenu : styles.profileSideMenuHidden}
    >
      <div className={styles.profSideContainer}>
        <div onClick={close} className={styles.profSideSpace} />
        <div className={styles.profSideMenu}>
          <ProfileImage
            imgW={57}
            imgH={57}
            hight="103px"
            padding="23px 25px 22px 21px"
            text1Size="16px"
            text2Size="14px"
            iconSize="14px"
          />
          <NavLinks isForMob={true} close={close} />
          <ProfileLinks close={close} />
        </div>
      </div>
    </div>
  );
};

export default ProfileSideMenu;
