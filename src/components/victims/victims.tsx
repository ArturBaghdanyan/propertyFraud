import { HandleClick } from './handleClick';
import { IList, list } from './victimsList';
import bgImage from '../../assets/works_image/background.png';

import style from './styles.module.scss';

function Victims() {
  return (
    <div
      style={{ backgroundImage: `url(${bgImage})` }}
      className={style.victims_wrapper}
    >
      <div className={style.title}>
        <h1>Victims of Property Fraud</h1>
      </div>
      <div className={style.border}></div>
      <div className={style.victims_text}>
        <p>
          Property & title fraud is an invisible digital threat that affects
          everyone. Here are just a few examples.
        </p>
      </div>

      <div className={style.rowList}>
        {list.map((items: IList) => (
          <div key={items.id} className={style.rowList_container}>
            <div className={style.image}>
              <img src={items.image} alt="image" />
            </div>
            <div className={style.rowList_container}>
              <h1>{items.title}</h1>
            </div>
            <div className={style.rowList_text}>
              <p>{items.text}</p>
            </div>
          </div>
        ))}
      </div>
      <HandleClick />
    </div>
  );
}
export default Victims;
