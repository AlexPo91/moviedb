import React from "react"
import { Link } from "react-router-dom"
import styles from "./styles.module.css"

const Header = () => (
  <header className={styles.header}>
    <div className="wrapper">
      <div className={styles.header__main}>
        <nav className={styles.nav__menu}>
          <div className={styles.nav__menu_item}>
            <Link to="/">
              <img className={styles.logo} src="/assets/logo.svg" alt="logo" />
            </Link>
            <Link to="/films">Фильмы</Link>
            <Link to="/serials">Сериалы</Link>
            <a href="locolhost:3000">Люди</a>
            <a href="locolhost:3000">Еще</a>
          </div>
          <div className={styles.nav__menu_item}>
            <a href="locolhost:3000">
              {/* <img
                src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-371-plus-white-0bac34f16124808a12ea863b4d9cc6e599dee7c0a80658cfe9ead26939e64517.svg"
                alt=""
              /> */}
              <span className={`${styles.plus} ${styles.logoItem}`} />
            </a>
            <a href="locolhost:3000">Язык</a>
            <a href="locolhost:3000">Войти</a>
            <a href="locolhost:3000">Присоедениться</a>
            <a className={styles.search__link} href="locolhost:3000">
              {/* <img
                src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-28-search-blue-177462d06db81ff2a02aa022c1c0be5ba4200d7bd3f51091ed9298980e3a26a1.svg"
                alt=""
              /> */}
              <span className={`${styles.search} ${styles.logoItem}`} />
            </a>
          </div>
        </nav>
      </div>
    </div>
  </header>
)

export default Header
