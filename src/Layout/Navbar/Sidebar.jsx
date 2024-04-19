import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

import { 
    GridOnOutlined as AllProductsIcon,
    LightbulbOutlined as LightingIcon,
    BookOutlined as BookcasesIcon,
    StorageOutlined as CabinetsAndSideboardsIcon,
    TableChartOutlined as TablesIcon,
    CoffeeOutlined as CoffeeTablesIcon,
    ChairOutlined as ChairsAndStoolsIcon,
    KitchenOutlined as KitchensIcon,
    WallpaperOutlined as WallPanellingIcon,
    ClearOutlined as CrossIcon
} from '@mui/icons-material';

const Sidebar = ({showSidebar,setShowSidebar,setShowNavbar,showNavbar}) => {
const toggleSideBar = () => {
    setShowSidebar(!showSidebar)
    setShowNavbar(!showNavbar)
} 

const menuItem = [
    {
      path: "/all-products",
      name: "All Products",
      icon: <AllProductsIcon />,
    },
    {
      path: "/lighting",
      name: "Lighting",
      icon: <LightingIcon />,
    },
    {
      path: "/book-cases",
      name: "Bookcases",
      icon: <BookcasesIcon />,
    },
    {
      path: "/cabinets-and-sideboards",
      name: "Cabinets And Sideboards",
      icon: <CabinetsAndSideboardsIcon />,
    },
    {
      path: "/tables",
      name: "Tables",
      icon: <TablesIcon />,
    },
    {
      path: "/coffee-tables",
      name: "Coffee Tables",
      icon: <CoffeeTablesIcon />,
    },
    {
        path: "/sofas-and-armchairs",
        name: "Sofas And Armchairs",
        icon: <ChairsAndStoolsIcon />,
    },
    {
        path: "/chairs-and-stools",
        name: "Chairs And Stools",
        icon: <ChairsAndStoolsIcon />,
    },
    {
        path: "/kitchens",
        name: "Kitchens",
        icon: <KitchensIcon />,
    },
    {
        path: "/wall-penelling",
        name: "Wall Penelling",
        icon: <WallPanellingIcon />,
    },
];
  return (
    <div className={`animate__animated animate__slideInRight ${styles.Sidebarcontainer}`}>
      <div className={styles.sidebar}>
        <div className={styles.sidebar_top_section}>
          <h1 className={styles.sidebarLogo} onClick={toggleSideBar}><CrossIcon /></h1>
        </div>
        {menuItem.map((item, index) => (
          <Link to={item.path} key={index} className={styles.sidebarLink}>
            <div className={styles.Sidebar_icon}>{item.icon}</div>
            <div className={styles.Sidebar_link_text}>{item.name}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
