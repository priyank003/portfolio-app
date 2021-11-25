import classes from "./About.module.css";
import Htmlcssjsimg from "../../../assets/about/htmlcssjs-removebg-preview.png";
import reactlogo from "../../../assets/about/reactlogo.png";
import reduxlogo from "../../../assets/about/reduxlogo.png";
const About = () => {
  return (
    <div className={classes.about}>
      <div className={classes["about-container"]}>
        <div className={classes["about-details"]}>
          <div className={classes["about-title"]}>
            <h2># ABOUT</h2>
            <h1>PRIYANK PATIL</h1>
          </div>
          <div className={classes["about-desc"]}>
            <p>
              " currently at my sophomore year pursuing Computer Engineering.
              Always strive to learn new things, as I believe one's version of
              today must be more advanced than of yesterday's. Crave for new
              experience and exposure."
            </p>
          </div>
        </div>
        <div className={classes["about-skills"]}>
          <div className={classes["html-div"]}>
            <div className={classes["skill-img"]}>
              <img src={Htmlcssjsimg} alt="" />
            </div>

            <p>Html JavaScript css </p>
          </div>
          <div className={classes["react-div"]}>
            <div className={classes["skill-img"]}>
              {" "}
              <img src={reactlogo} alt="" />
            </div>

            <p>React Javascript library</p>
          </div>
          <div className={classes["redux-div"]}>
            <div className={classes["skill-img"]}>
              <img src={reduxlogo} alt="" />
            </div>

            <p>Redux State management tool</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
