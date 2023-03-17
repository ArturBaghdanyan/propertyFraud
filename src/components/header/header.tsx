import { FC, useState } from 'react';

import close from '../../assets/header_icons/close.png';
import logo_colored from '../../assets/header_icons/logo_colored.svg';
import logo_white from '../../assets/header_icons/logo_white.svg';
import menu_black from '../../assets/header_icons/menu_black.png';
import menu_white from '../../assets/header_icons/menu_white.svg';

import style from './styles.module.scss';

type HeaderProps = {
  isHeaderFixed: boolean;
};

const Header: FC<HeaderProps> = ({ isHeaderFixed }) => {
  const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);
  function handleClick() {
    setIsMobileMenuOpened(!isMobileMenuOpened);
  }

  const menu = ['Home', 'Property Fraud', 'FAQ', 'Contact'];

  const showElement = isHeaderFixed ? (
    <img src={menu_black} alt="menu" />
  ) : (
    <img src={menu_white} alt="menu" />
  );
  return (
    <>
      <div className={`${style.root} ${isHeaderFixed ? style.sticky : ''}`}>
        <div className={`${style.header} container_spacing`}>
          <div className={style.header_icon}>
            {isHeaderFixed ? (
              <img src={logo_colored} alt="guardian" />
            ) : (
              <img src={logo_white} alt="guardian" />
            )}
          </div>
          <nav
            className={`${style.nav} ${isHeaderFixed ? style.scroll_nav : ''}`}
          >
            {menu.map((list, key) => (
              <p key={key}>{list}</p>
            ))}
          </nav>
          <div className={`${style.header_menu}`}>
            <div className={`${style.header_registration}`}>
              <div
                className={`${style.sign_in} ${
                  isHeaderFixed ? style.scroll_sign_in : ''
                }`}
              >
                Sign in
              </div>
              <div
                className={`${style.register} ${
                  isHeaderFixed ? style.scroll_register : ''
                }`}
              >
                Register
              </div>
            </div>
            <button onClick={handleClick} className={style.scroll_menu}>
              {showElement}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpened && (
        <div className={`${style.mobile_menu} container_spacing`}>
          <div className={style.title}>
            <img src={logo_colored} alt="guardian" />
            <button onClick={handleClick}>
              <img src={close} alt="close" />
            </button>
          </div>
          <nav>
            {menu.map((list, key) => (
              <p key={key}>{list}</p>
            ))}
          </nav>
        </div>
      )}
    </>
  );
};
export default Header;
