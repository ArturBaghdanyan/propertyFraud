import { priceList } from './pricingList';

import style from './style.module.scss';
function Pricing() {
  return (
    <div className={`${style.prices} container_spacing`}>
      <div className={style.prices_title}>
        <h1>
          <span>Title Guardian</span> Pricing
        </h1>
        <div className={style.border}></div>
        <div className={style.price_text}>
          <p>
            There are 3 subscription plans to suit your personal circumstances.
            Select your required plan and start below.
          </p>
        </div>
      </div>
      <div className={style.list}>
        {priceList.map(items => (
          <div key={items.id} className={style.list_columns}>
            <div className={style.list_header}>
              <div className={style.list_price}>{items.price}</div>
              <div className={style.list_title}>
                <p className={style.title_text}>{items.title_text}</p>
                <p className="text-[#7E818F]">{items.title_text2}</p>
              </div>
            </div>
            <div className={style.piece}>
              {Object.values(items.columns).map(item => (
                <div key={`${Math.random()}`} className={style.list_row}>
                  <img src={item.icon} alt="icon" />
                  <span className="text-[#4E4E4E]">{item.text}</span>
                </div>
              ))}
              <div className={style.list_footer}>
                <button>{items.actionButton}</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Pricing;
