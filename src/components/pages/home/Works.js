import classes from "./Works.module.css";
import placementapp from "../../../assets/works/Screenshot 2021-11-22 134441.png";
import yummealsapp from "../../../assets/works/Screenshot 2021-11-22 134903.png";
import lizardspock from "../../../assets/works/Screenshot 2021-11-22 135717.png";
import cowwinsellor from "../../../assets/works/Screenshot 2021-07-27 121710.png";
const Works = () => {
  return (
    <div className={classes.works}>
      <div className={classes["works-container"]}>
        <div className={classes["works-header"]}>
          <div className={classes["works-title"]}>
            <h2># PROJECTS</h2>
            <h1>My works</h1>
          </div>
          {/* <div className={classes["works-caption"]}>
            <p>
              " As a frontend developer I bring the UI design into real life. I
              make sure the designs visulazed by the Ui Ux designer get
              imprinted and convert to code using my field of expertise "
            </p>
          </div> */}
        </div>
        <div className={classes["works-gallery"]}>
          <div className={classes["works-div"]}>
            <div className={classes["works-img"]}>
              <img src={placementapp} alt="placement/app" />
            </div>
            <div className={classes["works-desc"]}>
              <p>
                <q>
                  Ait placement cell websiite craetred with React and firebase
                  as a realtime database hoseted on gh pages
                </q>
              </p>
            </div>
          </div>
          <div className={classes["works-div"]}>
            <div className={classes["works-img"]}>
              <img src={yummealsapp} alt="yummeals/app" />
            </div>
            <div className={classes["works-desc"]}>
              <p>
                <q>
                  Ait placement cell websiite craetred with React and firebase
                  as a realtime database hoseted on gh pages
                </q>
              </p>
            </div>
          </div>
          <div className={classes["works-div"]}>
            <div className={classes["works-img"]}>
              <img src={lizardspock} alt="lizardspock/app" />
            </div>
            <div className={classes["works-desc"]}>
              <p>
                <q>
                  Ait placement cell websiite craetred with React and firebase
                  as a realtime database hoseted on gh pages
                </q>
              </p>
            </div>
          </div>
          <div className={classes["works-div"]}>
            <div className={classes["works-img"]}>
              <img src={cowwinsellor} alt="cowinsellor/app" />
            </div>
            <div className={classes["works-desc"]}>
              <p>
                <q>
                  Ait placement cell websiite craetred with React and firebase
                  as a realtime database hoseted on gh pages
                </q>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
