/* eslint-disable react/prop-types */

import styles from './Box.module.css';

const Box = ({ children }) => {
  return (
      <div className={styles.box}>
          {children}
      </div>
  );
};

export default Box;
