import Header from "@/components/Dashboard/Header/Header";
import styles from "./styles.module.scss";
import NavBar from "@/components/Dashboard/Nav/NavBar/NavBar";

const DashboardLayout = ({ children }) => {
  return (
    <section className={styles.dashboard}>
      <div className={styles.container}>
        <Header />
        <div className={styles.dashContent}>
          <NavBar />
          {children}
        </div>
      </div>
    </section>
  );
};

export default DashboardLayout;
