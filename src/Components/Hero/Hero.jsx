import "./Hero.css";
import arrow from "../../assets/arrow.png";
import play from "../../assets/play-button.png";
import pause from "../../assets/video-pause-button.png";

const Hero = ({
  heroData,
  heroCount,
  setHeroCount,
  playStatus,
  setPlayStatus,
}) => {
  return (
    <div className="hero">
      <div className="herotext">
        <p>Give into</p>
        <p>your passions</p>
      </div>
      <div className="explore">
        <p>Explore the features</p>
        <img src={arrow} alt="" className="arrow" />
      </div>
      <div className="hero-dot-play">
        <ul className="hero-dots">
          <li onClick={()=>setHeroCount(0)} className={heroCount===0?"hero-dot orange":"hero-dot"}></li>
          <li onClick={()=>setHeroCount(1)} className={heroCount===1?"hero-dot orange":"hero-dot"}></li>
          <li onClick={()=>setHeroCount(2)} className={heroCount===2?"hero-dot orange":"hero-dot"}></li>
        </ul>
      </div>
      <div className="hero-play">
        <img onClick={()=>setPlayStatus(!playStatus)} src={playStatus?pause:play} alt="" className="playbtn"/>
        <p>See The Video</p>
      </div>
    </div>
  );
};

export default Hero;
