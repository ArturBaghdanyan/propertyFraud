import appstore from '../../assets/protection_images/appstore.svg';
import google_pay from '../../assets/protection_images/googlepay.svg';
import smartphones from '../../assets/protection_images/smartphones.png';

import style from './styles.module.scss';
function Protection() {
  return (
    <div className={`${style.container} container_spacing`}>
      <div className={style.container_image}>
        <img src={smartphones} alt="" />
      </div>
      <div className={style.rows}>
        <div className={style.columns}>
          <div className={style.title}>
            <h1>
              <span>Home Protection</span> in your pocket. Download the App
            </h1>
          </div>
          <div className={style.border}></div>
          <div className={style.text}>
            <p>
              Download the Title Guardian mobile App from the App Store or
              Google Play to make protecting your home even easier. Registration
              is simple, secure and fast.
            </p>
          </div>
          <div className={style.footer}>
            <img src={appstore} alt="" />
            <img src={google_pay} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Protection;
