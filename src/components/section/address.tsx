import { Images } from './images';
import bgImage from '../../assets/header_icons/background.png';
import apple from '../../assets/section_icons/apple.svg';
import search from '../../assets/section_icons/search.svg';

import styles from './styles.module.scss';
function Address() {
  return (
    <div
      className={styles.address_container}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className={styles.gradient}>
        <h1 className={styles.title_text}>
          Enter your address to find out if your property is at risk from fraud
        </h1>

        <label className={styles.input} htmlFor="search">
          <img src={search} alt="search" />
          <input
            id="search"
            className="input-search"
            type="text"
            placeholder="Start typing your address..."
          />
        </label>

        <Images />
        <button>
          <img src={apple} alt="apple" />
          <span>Download Our App</span>
        </button>

        <div className={styles.footer_wrapper}>
          <div className={styles.text_UK}>
            <p>The level of fraud in the UK is such that it is a</p>
            <p>
              <span className="text-white">National Security</span>
              <span> threat</span>
            </p>
          </div>
          <div className={styles.footer_text}>
            * UK Finance half year fraud update 2021
          </div>
        </div>
      </div>
    </div>
  );
}
export default Address;
