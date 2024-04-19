import React from "react";
import styles from "./HengeKitchens.module.css";
import AddIcon from "@mui/icons-material/Add";

const HengeKitchens = () => {
  return (
    <div className={styles.hengeKitchen}>
      <h1>HK</h1>
      <div className={styles.hengeKitchenContainer}>
        <div className={styles.hengeKitchenLeft}>
          <img src="./hengeKitchen.jpg" alt="hengeKitchen" />
        </div>
        <div className={styles.hengeKitchenRight}>
          <h1>HENGE KITCHENS</h1>
          <p>
            HK is the result of the interior design experience, coming from real
            houses projects and the awareness that the kitchen and the dining
            areas are the heart of the house, the core, a place of family and
            public conviviality.
          </p>
          <div style={{
            display:'flex',
            alignItems: 'center',
            color:'black',
            cursor: 'pointer',
          }}>
            <i style={{paddingTop:'3px'}}>
              <AddIcon fontSize="small" />
            </i>
            <p style={{color:'black',fontWeight:'bolder',textTransform:'uppercase',letterSpacing:'2px'}}>Discover</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HengeKitchens;
