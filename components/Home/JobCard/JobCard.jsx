import Image from "next/image";
import styles from "./styles.module.scss";
import { ImHeart } from "react-icons/im";
const JobCard = ({ job }) => {
  return (
    <li className={styles.jobCard}>
      <div className={styles.cardHead}>
        <div className={styles.cardContent}>
          <div className={styles.cardImage}>
            <div className={styles.image}>
              <Image src={job?.img} alt="comp" width={70} height={70} />
            </div>
            <div className={styles.cardTitle}>
              <h4>{job?.title}</h4>
              <p>{job?.company}</p>
            </div>
          </div>
          <div className={styles.cardAddress}>
            <div>
              <Image
                src="/images/location-pin.png"
                alt="ad"
                width={17}
                height={17}
              />
              <span>{job?.address}</span>
            </div>
            <div>
              <Image
                src="/images/calender-icon.png"
                alt="ad"
                width={18}
                height={18}
              />
              <span>{job?.date}</span>
            </div>
          </div>
          <ul className={styles.cardAbout}>
            <li>{job?.experience}</li>
            <li>{job?.workTime}</li>
            <li>{job?.workType}</li>
          </ul>
        </div>
        <button className={styles.likeBtn}>
          <ImHeart />
        </button>
      </div>
      <ul className={styles.cardFooter}>
        {job?.workCategories?.map((categ, index) => (
          <li key={index}>{categ}</li>
        ))}
      </ul>
    </li>
  );
};

export default JobCard;
