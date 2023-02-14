import ProductImagesSlider from './productImagesSlider';
import bgImage from '../../assets/works_image/background.png';
import { list } from '../../data/victimsList';

import style from './styles.module.scss';

const Victims = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bgImage})` }}
      className={`${style.victims_wrapper}`}
    >
      <div className={style.victims_columns}>
        <div className={`${style.victims_header} container_spacing`}>
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
