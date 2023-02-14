import telephone from '../../assets/telephone_images/telephone.png';
import { telephoneList } from '../../data/telephoneList';

import style from './styles.module.scss';
function MyList() {
  return (
    <div className={`${style.list}`}>
      <div className={style.list_title}>
        <h2>
          <span>Protect</span> Your Property
        </h2>
      </div>
      <div className={style.border}></div>
      <div className={style.list_text}>
        <p>
          Title Guardian will protect your property from fraud and identy theft.
          Our smart technology will identify all activity on your property and
          alert you immediately.
        </p>
      </div>
      <div className={style.list_columns}>
        <div className={style.list_image}>
          <img src={telephone} alt="telephone" />
        </div>
        {telephoneList.map(items => (
          <div
            key={items.id}
            className={`${style.rows} ${style[`item-${items.number}`]}`}
          >
            <span className={style.number}>{items.number}</span>
            <span className={style.rows_text}>{items.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
export default MyList;
