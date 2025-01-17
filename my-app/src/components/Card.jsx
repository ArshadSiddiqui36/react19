import "./style.css";
import styles from './Card.module.css';
import "./sassStyle.scss";

const Card = () => {

    const cardStyle = {
        border: "1px solid #f1f1f1",
        borderRadius: "25px",
        padding: "10px 15px"
    }

    const Style = `
    .cardStyles {
        border: 1px solid #f1f1f1;
        border-radius: 8px;
        padding: 10px 15px;
    }`;

  return (
    <div className={styles.cardContainer}>
      <div style={{border: "1px solid", borderColor: "#f1f1f1"}} className="cardStyle">Card Component - Used Inline CSS</div>
      <div style={cardStyle} className="cardStyle">Card Component - Used Internal CSS</div>
      <div className="cardStyle">Card Component - Used External CSS</div>
      {/* <div className={styles.cardStyle} >Card Component - Used External Module CSS</div> */}
      <div className={`${styles.cardStyle} cardStyle`} >Card Component - Used External Module CSS</div>
      {/* Plain CSS using style tag like internal CSS */}
      <style>{Style}</style>
      <div className="cardStyles cardStyle">Card Component - Used Plain Internal CSS</div>
    </div>
  )
}

export default Card