import additionalInformationPath from '../../../markdown/additional-information.md';
import useMarkdown from '../../hooks/useMarkdown';
import SectionWrapper from "../section-wrapper";
import styles from "./styles.module.scss";

const AdditionalInformation = () => {
  const additionalInformationMarkdown = useMarkdown(additionalInformationPath);

  return (
    <SectionWrapper
      title="Additional Information"
      isUnderlined
      contentClassName={styles.additionalInformation}
    >
      <div dangerouslySetInnerHTML={{ __html: additionalInformationMarkdown }} />
    </SectionWrapper>
  );
};

export default AdditionalInformation;
