import avatar from '../../assets/avatar.webp';
import styles from "./styles.module.scss";

const ContactInformation = () => {
  return (
    <div className={styles.contactInformation}>
      <img src={avatar} />
      <h4>Contact Information</h4>
      <a href="mailto:damico@g.harvard.edu">damico@g.harvard.edu</a>
    </div>
  );
};

export default ContactInformation;
