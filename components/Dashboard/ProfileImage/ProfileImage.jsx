import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import styles from "./styles.module.scss";

const ProfileImage = ({
  imgW,
  imgH,
  hight,
  padding,
  text1Size,
  text2Size,
  iconSize,
}) => {
  return (
    <div
      className={styles.profileImage}
      style={{ hight: hight, padding: padding }}
    >
      <div className={styles.profTopStart}>
        <div className={styles.profImg}>
          <Image
            src="/images/user.jpg"
            alt="user"
            width={imgW}
            height={imgH}
            style={{
              width: imgW,
              minWidth: imgW,
              maxWidth: imgW,
              height: imgH,
              minHeight: imgH,
              maxHeight: imgH,
            }}
          />
        </div>
        <div className={styles.profTitle}>
          <h3 className={styles.userName} style={{ fontSize: text1Size }}>
            Ahmed Amaar
          </h3>
          <p className={styles.userTtl} style={{ fontSize: text2Size }}>
            UX UI designer
          </p>
        </div>
      </div>

      <button className={styles.goBtn}>
        <FaChevronRight size={iconSize} />
        {/* <FaChevronLeft size={iconSize}  /> */}
      </button>
    </div>
  );
};

export default ProfileImage;
