import React from "react";
import styles from "./ProductComponentImages.module.css";

const ProductComponentImages = ({cateogoryImage}) => {
  return (
    <div className={styles.productImagesComp}>
      <div className={styles.productImagesContainer}>
        {
          cateogoryImage.map((item)=>{
            return(
              <div className={styles.productImagesImgContainer}>
                <img src={item.pic} alt="" srcset="" />
                <h4>{item.name}</h4>
              </div>
            )
          })
      }
      </div>
    </div>
  );
};

export default ProductComponentImages;