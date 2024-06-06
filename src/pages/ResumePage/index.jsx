import workingPapersPath from '../../../markdown/working-papers.md';
import policyArticlesPath from "../../../markdown/policy-articles.md";

import useMarkdown from '../../hooks/useMarkdown';
import Header from '../../components/header';
import ContactInformation from '../../components/contact-information';
import Summary from '../../components/summary';
import Articles from '../../components/articles';
import Experience from '../../components/experience';
import AdditionalInformation from '../../components/additional-information';

import styles from "./styles.module.scss";

const ResumePage = () => {
  const workingPapersMarkdown = useMarkdown(workingPapersPath);
  const policyArticlesMarkdown = useMarkdown(policyArticlesPath);

  return (
    <>
      <Header />
      <main className={styles.cv}>
        <div className={styles.cv_columns}>
          <ContactInformation />
          <div className={styles["cv_columns--right"]}>
            <Summary />
            <Articles title="Working Papers" markdown={workingPapersMarkdown} />
            <Articles
              title="Policy Articles"
              markdown={policyArticlesMarkdown}
            />
            <Experience />
            <AdditionalInformation />
          </div>
        </div>
      </main>
    </>
  );
}

export default ResumePage;
