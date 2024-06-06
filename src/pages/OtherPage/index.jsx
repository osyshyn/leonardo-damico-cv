import otherPath from "../../../markdown/other.md";

import Articles from "../../components/articles";
import Header from "../../components/header";
import useMarkdown from "../../hooks/useMarkdown";

import styles from './styles.module.scss';

const OtherPage = () => {
  const otherMarkdown = useMarkdown(otherPath);

  return (
    <>
      <Header />
      <main className={styles.container}>
        <Articles title="Other" markdown={otherMarkdown} />
      </main>
    </>
  );
};

export default OtherPage;
