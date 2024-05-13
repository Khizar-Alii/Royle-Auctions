import React from "react";
import styles from "./HLife.module.css";

const HLife = () => {
  return (
    <div className={styles.HLife}>
      <h1>H-LIFE</h1>
      <div className={styles.HLifeContainer}>
        <div className={styles.HLifeContainerLeft}>
          <img src="./HLife.jpg" alt="HLife" />
        </div>
        <div className={styles.HLifeContainerMid}>
          <h3>
            We are proud antique collectors and have a huge selection of 19th
            and 18th century <br /> European antique furniture
          </h3>
          <p>
            Royal Auction House specializes in unique vintage furniture and
            accessories designed to imbue, luxury, sophistication and unique
            character to your home. Living and breathing decorative, industrial,
            mid-century, and European, Egyptian and Asian antiques, introduce
            imaginative style to both period and contemporary decor settings. We
            source a complete range of vintage furniture and decorative objects
            in a wide range of ages and styles.
          </p>
        </div>
        <div className={styles.HLifeContainerRight}>
          <p>
            Our key objective is that our
            items work harmoniously within a contemporary design scheme, adding
            soul and style to your home, shop, cafe, restaurant, chalet, or
            boutique hotel. Established in 2004, the Royal House of Auctions
            strives to find the perfect pieces to complete your most imaginative
            interior designs.
            <br />
            If there's a special something you'd like, you can commission us to
            find it for you ! Or if you have any questions, we are happy to
            discuss all the details. Just email us at{" "}
            <strong>Khaled@roualautionhouse.com </strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HLife;
