import styles from "./styles.module.scss";
import ContentUI from "@/components/UI/ContentUI/ContentUI";
import SortingBy from "@/components/utils/SortingBy/SortingBy";
import SwipeButton from "@/components/utils/SwipeButton/SwipeButton";
import JobCard from "../JobCard/JobCard";
import Pagination from "@/components/utils/Pagination/Pagination";
import MobNavBtn from "../MobNavBtn/MobNavBtn";

const sortList = [
  {
    id: 0,
    nameEn: "Top match",
    value: "&sort=top-match",
  },
  {
    id: 1,
    nameEn: "Newest",
    value: "&sort=newest",
  },
  {
    id: 2,
    nameEn: "Latest",
    value: "&sort=latest",
  },
];

const jobsList = [
  {
    id: 1,
    link: "/",
    img: "/images/c1.png",
    title: "Gaming UI designer",
    company: "Rockstar Games ",
    address: "ElMansoura, Egypt",
    date: "10 days ago",
    experience: "0 - 3y of exp",
    workTime: "Full time",
    workType: "Remote",
    workCategories: [
      "Creative / Design",
      "IT / Software development",
      "Gaming",
    ],
  },
  {
    id: 2,
    link: "/",
    img: "/images/c2.png",
    title: "Senior UX UI Designer",
    company: "Egabi",
    address: "Cairo, Egypt",
    date: "month ago",
    experience: "0 - 3y of exp",
    workTime: "Full time",
    workType: "Hybrid",
    workCategories: ["Creative / Design", "IT / Software development"],
  },
  {
    id: 3,
    link: "/",
    img: "/images/c3.png",
    title: "React Frontend developer",
    company: "Magara",
    address: "Cairo, Egypt",
    date: "month ago",
    experience: "5 - 7y of exp",
    workTime: "Freelance",
    workType: "Remote",
    workCategories: [
      "Creative / Design",
      "IT / Software development",
      "Gaming",
    ],
  },
  {
    id: 4,
    link: "/",
    img: "/images/c1.png",
    title: "Gaming UI designer",
    company: "Rockstar Games ",
    address: "ElMansoura, Egypt",
    date: "10 days ago",
    experience: "0 - 3y of exp",
    workTime: "Full time",
    workType: "Remote",
    workCategories: [
      "Creative / Design",
      "IT / Software development",
      "Gaming",
    ],
  },
  {
    id: 5,
    link: "/",
    img: "/images/c2.png",
    title: "Senior UX UI Designer",
    company: "Egabi",
    address: "Cairo, Egypt",
    date: "month ago",
    experience: "0 - 3y of exp",
    workTime: "Full time",
    workType: "Hybrid",
    workCategories: ["Creative / Design", "IT / Software development"],
  },
  {
    id: 6,
    link: "/",
    img: "/images/c3.png",
    title: "React Frontend developer",
    company: "Magara",
    address: "Cairo, Egypt",
    date: "month ago",
    experience: "5 - 7y of exp",
    workTime: "Freelance",
    workType: "Remote",
    workCategories: [
      "Creative / Design",
      "IT / Software development",
      "Gaming",
    ],
  },
];
const HomeContent = () => {
  return (
    <ContentUI>
      <div className={styles.homeContent}>
        <div className={styles.sort}>
          <SortingBy sortList={sortList} defaultSort={sortList[0]} />
        </div>
        <div className={styles.container}>
          <div className={styles.topSec}>
            <div className={styles.topHead}>
              <div className={styles.topHeadStart}>
                <h3 className={styles.topTtl}>UI Designer in Egypt</h3>
                <p className={styles.topTxt}>70 job positions</p>
              </div>
              <div className={styles.topHeadEnd}>
                <span className={styles.alertTxt}>Set alert</span>
                <SwipeButton />
              </div>
            </div>
            <MobNavBtn />
          </div>
          <ul className={styles.jobList}>
            {jobsList?.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
            <Pagination />
          </ul>
        </div>
      </div>
    </ContentUI>
  );
};

export default HomeContent;
