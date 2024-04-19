import React from "react";
import styles from "./S34.module.css";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";


const S34 = () => {
  return (
    <div className={styles.s34Container}>
      <div className={styles.S34Left}>
        <div>
          <h1>S</h1>
          <span>34</span>
        </div>
        <img src="./S34.jpg" alt="" />
      </div>
      <div className={styles.S34mid}>
        <h3>HENGE SHOWROOM</h3>
        <h2>
          OUR HOME IN <br /> MILAN.
        </h2>
        <p>
          Henge has moved its Home and has created a whole new space, in the
          center of Milan's Quadrilatero della Moda, Via Della Spiga 34.
        </p>
        <br />
        <br />
        <p>
          The new Home is called S34, a space that allows you to immerse
          yourself and delve into the personality and creative eclecticism that
          has been a hallmark of Henge's journey over the years.
        </p>
        <Link
          to="/discover-more"
          className={`${styles.discoverMore}`}
          
        >
          <i>
            <AddIcon />
          </i>
          <span>Discover more</span>
        </Link>
      </div>
      <div className={styles.S34Right}>
        <p>
          An augmented surface that merges architecture and products in one
          place. Three levels of light, shape, matter, and function to explore.
        </p>
      </div>
    </div>
  );
};

export default S34;
