import stroke from '../../assets/protect_icon/stroke.svg';

import style from './style.module.scss';

function Protect() {
  return (
    <div className={style.protect}>
      <div className={style.protect_title}>
        <h1>
          {`Don't want to be the next victim of`} <span>Title Fraud?</span>
        </h1>
      </div>
      <div className={style.border}></div>
      <div className={style.protect_text}>
        <p>
          Time to register and protect your most valuable asset-your Home and
          family. Registration is simple and secure and our technology will
          identifies and register your property in minutes.
        </p>
      </div>
      <div className={style.protect_footer}>
        <img src={stroke} alt="stroke" />
        <span>I want to be protected</span>
      </div>
    </div>
  );
}
export default Protect;
