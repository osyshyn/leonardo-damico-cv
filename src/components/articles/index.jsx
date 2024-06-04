import SectionWrapper from "../section-wrapper";
import styles from "./styles.module.scss";

const Articles = ({ title, markdown }) => {
  return (
    <SectionWrapper title={title} isUnderlined contentClassName={styles.workingPapers}>
      <div dangerouslySetInnerHTML={{ __html: markdown }} />
    </SectionWrapper>
  );
};

export default Articles;
