import ProductImagesSlider from './productImagesSlider';
import { list } from './victimsList';
import bgImage from '../../assets/works_image/background.png';

import style from './styles.module.scss';

const Victims = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bgImage})` }}
      className={`${style.victims_wrapper} container_spacing`}
    >
      <div className={style.victims_columns}>
        <div className={style.victims_header}>
          <div className={style.header_row}>
            <div className={style.title}>
              <h1>Victims of Property Fraud</h1>
            </div>
            <div className={style.border}></div>
            <div className={style.victims_text}>
              <p>
                Property & title fraud is an invisible digital threat that
                affects everyone. Here are just a few examples.
              </p>
            </div>
          </div>
        </div>
        <ProductImagesSlider images={list} />
      </div>
    </div>
  );
};
export default Victims;
