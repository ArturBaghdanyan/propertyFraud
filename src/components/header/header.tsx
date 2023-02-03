import guardian_icon from '../../assets/header_icons/header.svg';
import menu_icon from '../../assets/header_icons/menu.svg';

import style from './styles.module.scss';

function Header() {
  return (
    <div className={style.header}>
      <div className={style.header_icon}>
        <img src={guardian_icon} alt="guardian" />
      </div>
      <div className={style.menu}>
        <img src={menu_icon} alt="menu" />
      </div>
    </div>
  );
}
export default Header;
