import convertTitleToId from "../../helpers/convertTitleToId";
import styles from "./styles.module.scss";

const SectionWrapper = ({ title, contentClassName, children }) => {
  const id = convertTitleToId(title);

  return (
    <section className={styles.sectionWrapper} id={id}>
      {title && (
        <>
          <h3>{title}</h3>
          <hr />
        </>
      )}
      <div className={contentClassName}>{children}</div>
    </section>
  );
};

export default SectionWrapper;
