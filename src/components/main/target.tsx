import { mainList, IList } from '../../data/mainList';

import style from './styles.module.scss';
function TargetProperty() {
  return (
    <div className={style.target}>
      <div className={style.target_title}>
        <h1>
          Title Guardian<span className="text-slate-500"> will </span>
          protect <span className="text-slate-500"> your property from </span>
          identity theft <span className="text-slate-500">and</span> property
          hijacking
        </h1>
      </div>
      <div className={style.border}></div>
      <div className={style.target_text}>
        3 simple steps that can turn your world upside down
      </div>
      <div className={style.columns}>
        {mainList.map((items: IList) => (
          <div
            key={items.id}
            className={`${style.columns_piece} ${
              style[`item-${items.number}`]
            }`}
          >
            <div className={style.image}>
              <img src={items.image} alt="image" />
            </div>
            <p className={style.columns_title}>{items.title}</p>
            <p className={style.text}>{items.text}</p>
            <p className={style.number}>{items.number}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default TargetProperty;
