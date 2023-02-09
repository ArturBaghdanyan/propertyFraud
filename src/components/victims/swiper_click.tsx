import { useSwiper } from 'swiper/react';

import left from '../../assets/victims_image/left.svg';
import right from '../../assets/victims_image/right.svg';

import style from './styles.module.scss';

export default function SwiperButtons() {
  const swiper = useSwiper();
  return (
    <div className={`${style.click} ${style.victims_header}`}>
      <button onClick={() => swiper.slidePrev()}>
        <img src={left} alt="left" />
      </button>
      <button onClick={() => swiper.slideNext()}>
        <img src={right} alt="right" />
      </button>
    </div>
  );
}
