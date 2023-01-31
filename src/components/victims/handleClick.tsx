import { useState } from 'react';

import left from '../../assets/victims_image/left.svg';
import right from '../../assets/victims_image/right.svg';

import style from './styles.module.scss';
export const HandleClick = () => {
  //props: string
  const [show, setShow] = useState(false);

  function showElement() {
    setShow(!show);
  }
  // let incrementCounter = () => setCount(count + 1); //props.image
  // let decrementCounter = () => setCount(count - 1);
  const buttonText = show ? (
    <img src={left} alt="left" />
  ) : (
    <img src={right} alt="right" />
  );
  return (
    <div className={style.button}>
      {/*<button onClick={showElement}>*/}
      {/*    <img src={left} alt="left"/>*/}
      {/*</button>*/}
      <button onClick={showElement}>{buttonText}</button>
      {show ? <p>Hi</p> : ''}
      {/*<button onClick={incrementCounter}>*/}
      {/*    <img src={right} alt="right"/>*/}
      {/*</button>*/}
    </div>
  );
};
