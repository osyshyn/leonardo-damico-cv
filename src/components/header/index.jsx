import convertTitleToId from "../../helpers/convertTitleToId";
import styles from "./styles.module.scss";

const NAVIGATION_TITLES = [
  "Working Papers",
  "Policy Articles",
  "Professional and Teaching Experience",
  "Additional Information",
  "Other",
];

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header_inner}>
        <h1>Leonardo D’Amico</h1>
        <nav>
          <ul>
            {NAVIGATION_TITLES.map((title) => {
              const id = convertTitleToId(title);

              return (
                <li key={id}>
                  <a href={`#${id}`}>{title}</a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
