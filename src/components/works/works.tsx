import bgImage from '../../assets/works_image/background.png';
import image from '../../assets/works_image/image.png';

import style from './styles.module.scss';

function Works() {
  return (
    <div className={style.root}>
      <div className={style.image}>
        <img src={image} alt="" />
      </div>
      <div
        style={{ backgroundImage: `url(${bgImage})` }}
        className={style.background}
      >
        <div className={`${style.square}`}>
          <div className={style.wrapper}>
            <div className={style.title}>
              <h1>How it Works</h1>
            </div>
            <div className={style.border}></div>
            <div className={style.text}>
              <p>
                Your home and family is your most valuable asset. Protecting
                them is now simple and secure with Title Guardian. Our
                technology will detect any attempt to hijack or tamper with your
                homes title deeds, giving you peace of mind.
                <br />
                <br />
                Please take the time to watch our short video to learn more
                about the risks in todays environment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Works;
