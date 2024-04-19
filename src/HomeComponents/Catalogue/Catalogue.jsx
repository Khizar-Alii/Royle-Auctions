import React from 'react'
import styles from "./Catalogue.module.css"
import AddIcon from "@mui/icons-material/Add";

const Catalogue = () => {
  return (
    <div className={styles.catalogue}>
        <div className={styles.catalogueLeft}>
            <h3>HENGE CATALOGUE</h3>
            <h2>DOWNLOAD OUR LATEST CATALOGUE</h2>
            <p>Home is a container in which we live experiences and share them with those who are part of our lives. It is the material expression of what we most love, and wish to be surrounded by, each day. It is the oldest form of “social network”, where we live and dream of being connected to our identity, cultivating unique emotions, interactions and bonds.</p>
        </div>
        <div className={styles.catalogueRight}>
            <img src="./catalogue.jpg" alt="catalogue" />
            <div>
                <i><AddIcon fontSize="small" /></i>
                <p>S34/2 Catalogue Download</p>
            </div>
        </div>
    </div>
  )
}

export default Catalogue
