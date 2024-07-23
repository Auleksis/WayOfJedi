import s from "./LinkButton.module.css";
import { Link } from "react-router-dom";

export interface Props {
  text: string;
  to: string;
}

const LinkButton = (props: Props) => {
  return (
    <>
      <Link className={s.link} to={props.to}>
        <h2 className={s.text}>{props.text}</h2>
      </Link>
    </>
  );
};

export default LinkButton;
