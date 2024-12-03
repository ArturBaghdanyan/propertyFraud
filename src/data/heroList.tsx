import actionfraud from '../assets/section_icons/ActionFraud.svg';
import registry from '../assets/section_icons/registry.svg';
import society from '../assets/section_icons/society.svg';
import styles from '../components/hero/styles.module.scss';

export const HeroList = () => {
  return (
    <div className={styles.images_rows}>
      <img src={registry} alt="registry" />
      <img src={society} alt="society" />
      <img src={actionfraud} alt="actionfraud" />
    </div>
  );
};
