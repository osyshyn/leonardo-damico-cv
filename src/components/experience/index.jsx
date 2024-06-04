import experiencePath from "../../../markdown/experience.md";
import useMarkdown from "../../hooks/useMarkdown";
import SectionWrapper from "../section-wrapper";
import styles from "./styles.module.scss";

const Experience = () => {
  const experienceMarkdown = useMarkdown(experiencePath);

  return (
    <SectionWrapper
      title="Professional and Teaching Experience"
      isUnderlined
      contentClassName={styles.experience}
    >
      <div dangerouslySetInnerHTML={{ __html: experienceMarkdown }} />
    </SectionWrapper>
  );
};

export default Experience;
