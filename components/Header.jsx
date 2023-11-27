import React from "react";
import styles from "@/styles/Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faCloud } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <p>Date</p>
        <div className={styles.block}>
          <p>
            <FontAwesomeIcon icon={faCloud} />
            temperature
          </p>
        </div>
      </div>
      <h1 className={styles.title}>Zhe Journal</h1>
      <div className={styles.right}>
        <p>welcome...</p>
        <div className={styles.block}>
          <FontAwesomeIcon icon={faUser} />
          <span>
            <br />
            connexion
          </span>
        </div>
      </div>
    </div>
  );
}
