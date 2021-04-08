import React from "react"
import styles from "./styles.module.css"

const Header = () => (
  <header className={styles.header}>
    <div className="wrapper">
      <a href="locolhost:3000">
        <img className={styles.logo} src="/assets/logo.svg" alt="logo" />
      </a>
    </div>
  </header>
)

export default Header
