import s from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={s.footer_container}>
      <h2 className={s.subtitle}>Way of Jedi. 2024</h2>
      <h2 className={s.subtitle}>
        For all questions:{" "}
        <a className={s.underlined_text} href="mailto: auleks.red@gmail.com">
          {" "}
          auleks.red@gmail.com
        </a>
      </h2>
    </div>
  );
};

export default Footer;
