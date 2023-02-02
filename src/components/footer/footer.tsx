import { IFooter, footerlist, mobileAppUrl } from './footerList';
import header from '../../assets/footer_icons/header.svg';

import style from './style.module.scss';
function Footer() {
  return (
    <div className={`${style.footer} container_spacing`}>
      <div className={style.footer_header}>
        <img src={header} alt="" />
      </div>
      <div className={style.footer_list}>
        {footerlist.map((item: IFooter) => (
          <div key={item.id} className={style.footer_piece}>
            <h3>{item.title}</h3>
            {item.list.map(elem => (
              <div key={`${Math.random()}`}>{elem}</div>
            ))}
            {item.text_1 && <div>{item.text_1}</div>}
            {item.text_2 && <div>{item.text_2}</div>}
          </div>
        ))}
        <div className={style.footer_piece}>
          <h3>{mobileAppUrl.title}</h3>
          <img src={mobileAppUrl.appStoreIcon} alt="" />
          <img src={mobileAppUrl.gpIcon} alt="" />
        </div>
      </div>
    </div>
  );
}
export default Footer;
