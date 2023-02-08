import PropTypes from 'prop-types';
import { FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import SlideNextButton from './swiper_click';
import { IList } from './victimsList';

import style from './styles.module.scss';

const ProductImagesSlider = (props: { images: IList[] }) => {
  return (
    <>
      <Swiper
        loop={true}
        freeMode={true}
        autoHeight={true}
        modules={[FreeMode]}
        slidesPerView={1}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1366: {
            slidesPerView: 3.5,
          },
        }}
        spaceBetween={24}
        className={style.mySwiper}
      >
        {props.images.map((items: IList) => (
          <SwiperSlide key={items.id} className={style.mySwiper_container}>
            <div className={style.image}>
              <img src={items.image} alt="image" />
            </div>
            <div className={style.mySwiper_rows}>
              <div className={style.mySwiper_title}>
                <h2>{items.title}</h2>
              </div>
              <div className={style.mySwiper_text}>
                <p>{items.text}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <SlideNextButton />
    </>
  );
};
ProductImagesSlider.propTypes = {
  images: PropTypes.array.isRequired,
};
export default ProductImagesSlider;
