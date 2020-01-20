import React from 'react';
import styles from './last-vins.module.scss';

const LastVins = ({ vins, onClick }) => (
  <>
  {vins.length !== 0 && (
    <div className="last-vins">
      <h4 className={styles.title}>Last vins:</h4>
      <ul className="flex-box">
        {vins.map((el, i) => (
          <li key={i} className="flex-item-btn" onClick={() => onClick(vins[i])}>{el.name}</li>
        ))}
      </ul>
    </div>
  )}
  </>
)

export default LastVins;
