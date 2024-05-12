import React from "react";
import styles from "./ProductComponentImages.module.css";

const ProductComponentImages = () => {
  const menuItem = [
    {
      path: "/center-piece",
      name: "Center Piece",
      pic: "./centerPiece.jpg",
      id: 1,
    },
    {
      path: "/clocks",
      name: "Clocks",
      pic: "./clocks.jpg",
      id: 2,
    },
    {
      path: "/lighting",
      name: "Lighting",
      pic: "./lighting.jpg",
      id: 3,
    },
    {
      path: "/mirrors",
      name: "Mirrors",
      pic: "./mirrors.jpg",
      id: 4,
    },
    {
      path: "/porcelain",
      name: "Porcelain",
      pic: "porcelain.jpg",
      id: 5,
    },
    {
      path: "/paintings",
      name: "Paintings",
      pic: "./painting.jpg",
      id: 6,
    },
    {
      path: "/seating",
      name: "Seating",
      pic: "./seating.jpg",
      id: 7,
    },
    {
      path: "/storage",
      name: "Storage",
      pic: "./storage.jpg",
      id: 8,
    },
    {
      path: "/sculpture",
      name: "Sculpture",
      pic: "./sculpture.jpg",
      id: 9,
    },
    {
      path: "/silverware",
      name: "Silverwave",
      pic: "Silverware.jpg",
      id: 10,
    },
    {
      path: "/tables",
      name: "Tables",
      pic: "./tables.jpg",
      id: 11,
    },
    {
      path: "/dining-room",
      name: "Dining Room",
      pic: "./diningRoom.jpg",
      id: 12,
    },
    {
      path: "/living-room",
      name: "Living Room",
      pic: "./livingRoom.jpg",
      id: 13,
    },
    {
      path: "/marbles",
      name: "Marbles",
      pic: "./marbles.jpg",
      id: 14,
    },
    {
      path: "/bedroom",
      name: "Bed Room",
      pic: "./bedroom.jpg",
      id: 15,
    },
    {
      path: "/crystal",
      name: "Crystal",
      pic: "./crystal.jpg",
      id: 16,
    },
  ];
  return (
    <div className={styles.productImagesComp}>
      <div className={styles.productImagesContainer}>
        {
          menuItem.map((item)=>{
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