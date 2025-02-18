import styles from "./styles.module.scss";

const ContentUI = ({ children }) => {
  return <section className={styles.contentUI}>{children}</section>;
};

export default ContentUI;
