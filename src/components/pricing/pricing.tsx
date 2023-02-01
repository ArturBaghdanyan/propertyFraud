import { priceList } from './pricingList';

import style from './style.module.scss';
function Pricing() {
  return (
    <div className={style.prices}>
      <div className={style.prices_title}>
        <h1>
          <span>Title Guardian</span> Pricing
        </h1>
        <div className={style.border}></div>
        <p>
          There are 3 subscription plans to suit your personal circumstances.
          Select your required plan and start below.
        </p>
      </div>
      <div className={style.list}>
        {priceList.map(items => (
          <div key={items.id}>
            <div className={style.list_header}>
              <div className={style.list_price}>{items.price}</div>
              <div className={style.list_title}>
                <p className={style.title_text}>{items.title_text}</p>
                <p>{items.title_text2}</p>
              </div>
            </div>
            <div className={style.piece}>
              {Object.values(items.columns).map(item => (
                <div key={`${Math.random()}`}>
                  <img src={item.icon} alt="" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
            <div key={items.footer.id} className={style.list_footer}>
              {items.footer.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Pricing;
