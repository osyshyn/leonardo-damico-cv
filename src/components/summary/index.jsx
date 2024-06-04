import summary from "../../../markdown/summary.md";
import SectionWrapper from "../section-wrapper";
import useMarkdown from "../../hooks/useMarkdown";
import styles from "./styles.module.scss";

const Summary = () => {
  const markdown = useMarkdown(summary);

  return (
    <div className={styles.summary}>
      <SectionWrapper title="" contentClassName={styles.summaryContent}>
        <div dangerouslySetInnerHTML={{ __html: markdown }} />
      </SectionWrapper>
    </div>
  );
};

export default Summary;

