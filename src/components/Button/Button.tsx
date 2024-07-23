import s from "./Button.module.css";

export interface Props {
  text: string;
  handleClick: (arg: any) => void;
  arg?: any;
}

const Button = (props: Props) => {
  return (
    <button className={s.button} onClick={() => props.handleClick(props.arg)}>
      <h2 className={s.text}>{props.text}</h2>
    </button>
  );
};

export default Button;
