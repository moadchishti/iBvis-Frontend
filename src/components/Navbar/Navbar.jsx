import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css"; // Import CSS for styling
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      {/* <div className={styles.navbar_wrapper}> */}
      <div className={styles.logoContainer}>
        <div className={styles.navbar_logo}>
          {/* <div alt="logo" className={styles.logoPNGcontainer}> */}
            <a href='/'><img src={logo} alt='logo_icon' className={styles.logoPNG}/></a>
          {/* </div> */}
          {/* <Link to="/">IBvision.ai</Link> */}
        </div>
      </div>
      <ul className={styles.navbar_links}>
        <li>
          <Link to="/technology">Technology</Link>
        </li>
        <li>
          <Link to="/ai_solutions">AI Solutions</Link>
        </li>
        <li>
          <Link to="/who_we_serve">Who We Serve</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <button className={styles.book_meeting_button}>Book a Meeting</button>
      {/* </div> */}
    </nav>
  );
};

export default Navbar;
