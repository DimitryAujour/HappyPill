import React from 'react';
import pil from './pill.png';
import {Link} from 'react-router-dom';
import '../App.css';

const Pill = ({onClick}) => {
  return (
    <div className={'intro'}>
      <h1>Happy pill</h1>
        <img src={pil} className={'pill'} alt={"happy pill cartoon "} />
      <Link to="/PillMessage">
        <button className={'button-19'} onClick={onclick}>Take a pill</button>
        </Link>
    </div>
  );
}
export default Pill;