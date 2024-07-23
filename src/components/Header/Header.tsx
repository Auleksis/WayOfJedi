import s from "./Header.module.css";
import { useTheme } from "../../hooks/useTheme";
import Yoda from "../../assets/yoda.svg";
import DarthVader from "../../assets/darth_vader.svg";
import Switch from "../Switch/Switch";
import Button from "../Button/Button";
import LinkButton from "../LinkButton/LinkButton";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [, handleChange] = useTheme("light");

  const navigate = useNavigate();

  const navigateToWay = () => {
    navigate("/way");
  };

  return (
    <>
      <div className={s.background}>
        <h1 className={s.header}>
          <b>WAY OF JEDI</b>
        </h1>

        <div className={s.profile_area_div}>
          <Button text="Start Way" handleClick={navigateToWay} />
          <Switch
            handleChange={handleChange}
            image_on={DarthVader}
            image_off={Yoda}
          />
          <LinkButton to="about" text="About" />
        </div>
      </div>
    </>
  );
};

export default Header;
