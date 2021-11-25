import classes from "./Footer.module.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes["footer-container"]}>
        <div className={classes["footer-hero"]}>
          <h1>
            So, ready to collaborate ?<br />
            let's discuss it!
          </h1>

          <div className={classes["footer-nav"]}>
            <button>Get in touch </button>
          </div>
          <div className={classes["footer-social"]}>
            <i class="fab fa-facebook-square"></i>

            <i class="fab fa-linkedin"></i>
            <i class="fab fa-instagram"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
