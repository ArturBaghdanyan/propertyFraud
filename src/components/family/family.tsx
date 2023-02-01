import bgImage from '../../assets/family_image/family.jpg';

import style from './styles.module.scss';

function Family() {
  return (
    <div style={{ backgroundImage: `url(${bgImage})` }} className={style.outer}>
      <div className={style.outer_container}>
        <div className={style.outer_text}>
          <p>
            Relax and enjoy your time with those you love and take comfort
            knowing we have you protected
          </p>
        </div>
        <div className={style.outer_footer}>
          <span>Register My Property</span>
        </div>
      </div>
    </div>
  );
}
export default Family;
