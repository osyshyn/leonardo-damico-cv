import { HashLink as Link } from "react-router-hash-link";
import convertTitleToId from "../../helpers/convertTitleToId";
import styles from "./styles.module.scss";

const NAVIGATION_TITLES = [
  "Working Papers",
  "Policy Articles",
  "Professional and Teaching Experience",
  "Additional Information",
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
                  <Link to={`/#${id}`}>{title}</Link>
                </li>
              );
            })}
            <li>
              <Link to="/other">Other</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
