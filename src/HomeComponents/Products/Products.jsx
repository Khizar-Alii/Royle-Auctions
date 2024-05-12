import React from "react";
import styles from "./Products.module.css";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Products = () => {
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
      path: "/silverwave",
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
      pic: "./marbles.jpg",
      id: 16,
    },
    
  ];
  return (
    <div className={styles.products__maincontainer}>
      <Swiper
        direction={"horizontal"}
        className={styles.products__container}
        loop={true}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        spaceBetween={200}
        navigation={true}
        slidesPerView={5}
        allowSlideNext={true}
        breakpoints={{
          300: {
            width: 300,
            slidesPerView: 2,
            spaceBetween: 200,
          },
          400: {
            width: 400,
            slidesPerView: 2,
            spaceBetween: 50,
          },
          500: {
            width: 500,
            slidesPerView: 3,
            spaceBetween: 200,
          },
          600: {
            width: 600,
            slidesPerView: 3,
            spaceBetween: 100,
          },
          640: {
            width: 640,
            slidesPerView: 3,
            spaceBetween: 100,
          },
          700: {
            width: 700,
            slidesPerView: 3,
            spaceBetween: 150,
          },

          800: {
            slidesPerView: 3,
            width: 800,
            spaceBetween: 100,
          },

          900: {
            slidesPerView: 4,
            width: 900,
            spaceBetween: 200,
          },
          1000: {
            slidesPerView: 4,
            width: 1000,
            spaceBetween: 200,
          },
        }}
        modules={[Pagination]}
      >
        {menuItem.map(({ id, pic, name, path }) => {
          return (
            <SwiperSlide className={styles.products__card} key={id}>
              <Link to={path}>
                <img
                  src={pic}
                  alt=""
                  className={`animate__animated animate__rotateInUpLeft ${styles.products__img}`}
                />
                <div className={styles.products__name}>
                  <i>
                    <AddIcon />
                    <p>{name}</p>
                  </i>
                </div>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Products;
