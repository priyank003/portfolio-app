import classes from "./Landing.module.css";

const Landing = () => {
  return (
    <div className={classes.landing}>
      <div className={classes["landing-conatiner"]}>
        <div className={classes["landing-hero"]}>
          <div className={classes["landing-name"]}>
            <h3>PRIYANK PRAKASH PATIL</h3>
          </div>
          <div className={classes["landing-heading"]}>
            <h1>Love creating a meaningful digital Product !</h1>
          </div>
          <div className={classes["landing-caption"]}>
            <p>
              I believe in Process, Always give my best shot to help in your
              endeavours!
            </p>
          </div>
          <div className={classes["landing-nav"]}>
            <button>See my work</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
