/* eslint-disable react/prop-types */

import styles from './Box.module.css';

const Box = ({ children }) => {
  return (
      <div className={styles.box}>
          {children}
          <p>Here is some content inside the <strong>Box</strong> component</p>
      </div>
  );
};

export default Box;
