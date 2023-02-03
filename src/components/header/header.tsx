import { useState } from 'react';

import guardian_icon from '../../assets/header_icons/header.svg';
import menu_icon from '../../assets/header_icons/menu.svg';

import style from './styles.module.scss';

function Header() {
  const [show, setShow] = useState(false);

  const showElement = show ? (
    <img src={menu_icon} alt="menu" />
  ) : (
    <img src={menu_icon} alt="menu" />
  );
  function handleClick() {
    setShow(!show);
  }
  return (
    <div className={`${style.header} container_spacing`}>
      <div className={style.header_icon}>
        <img src={guardian_icon} alt="guardian" />
      </div>
      <nav>
        <p>Home</p>
        <p>Property Fraud</p>
        <p>FAQ</p>
        <p>Contact</p>
      </nav>
      <div className={style.header_menu}>
        <div className={style.header_registration}>
          <div className={style.sign_in}>Sign in</div>
          <div className={style.register}>Register</div>
        </div>
        <button onClick={handleClick}>
          {showElement}
          {show && (
            <nav>
              <p>Home</p>
              <p>Property Fraud</p>
              <p>FAQ</p>
              <p>Contact</p>
            </nav>
          )}
        </button>
      </div>
    </div>
  );
}
export default Header;
