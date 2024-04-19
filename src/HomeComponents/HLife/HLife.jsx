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
          <h3>TALK: PAOLO <br /> TORMENA</h3>
          <p>
          Milan is an international hub for many industries. In the design industry, Milan is the hub. S34 (showroom Henge in via Della Spiga 34 - editor's note) is our clients' home, a space where we don't sell anything, but where we welcome all our worldwide partners and their clients to explore our collection. Our objective was to create an original and unconventional interior design project by filling up volumes with the mood that characterizes us.
          </p>
        </div>
        <div className={styles.HLifeContainerRight}>
            <p>The task hasn't been easy because the space has three levels with completely different architectural characteristics in each one. However, we decided to take this as plus rather than a challenge. The investment is significant, but we think that we can leverage our position and attractiveness to welcome our guests throughout the year and not just for the Design Week.</p>
        </div>
      </div>
    </div>
  );
};

export default HLife;
