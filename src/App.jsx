import workingPapersPath from "../markdown/working-papers.md";
import policyArticlesPath from "../markdown/policy-articles.md";
import otherPath from "../markdown/other.md";

import useMarkdown from "./hooks/useMarkdown";
import Header from "./components/header";
import Summary from "./components/summary";
import ContactInformation from "./components/contact-information";
import Articles from "./components/articles";
import Experience from "./components/experience";
import AdditionalInformation from "./components/additional-information";

import styles from "./App.module.scss";

function App() {
  const workingPapersMarkdown = useMarkdown(workingPapersPath);
  const policyArticlesMarkdown = useMarkdown(policyArticlesPath);
  const otherMarkdown = useMarkdown(otherPath);

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
            <Articles title="Other" markdown={otherMarkdown} />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
