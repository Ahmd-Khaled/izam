import Link from "next/link";
import styles from "./styles.module.scss";
import ProfileImage from "../ProfileImage/ProfileImage";
import ProfileLinks from "../ProfileLinks/ProfileLinks";

const ProfileDropDownMenu = () => {
  return (
    <div className={styles.profDropMenu}>
      <ProfileImage
        imgW={70}
        imgH={70}
        hight="118px"
        padding="25px 25px 23px 23px"
        text1Size="19px"
        text2Size="15px"
        iconSize="20px"
      />
      <ProfileLinks close={console.log("")} />
    </div>
  );
};

export default ProfileDropDownMenu;
