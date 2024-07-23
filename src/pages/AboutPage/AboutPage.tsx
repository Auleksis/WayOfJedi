import Button from "../../components/Button/Button";
import s from "./AboutPage.module.css";
import Me from "/src/assets/images/me2.jpg";

const dict = [
  "Unity is one of the most friendly game engine to start with. When I started I found a lot of tutorials that allowed me to learn basics and proceed to my first project.",
  "What could be easier and more exciting than Snake? I consider this game the best field for experiments and learning programming basics.",
  "Firstly, you need to create some objects. To start with, the snake body could be an array of points. Stop, what is array? Here we go, we need to learn variables types and define which of them will be useful for us. Try to use simple variables types without classes!",
  "Now we have objects that... are staying. Let's make them moving! Now we need some functions to process input, render a map and so on.",
  "The time has come to add your own features and your game unique. You can make portals for your snake or make some bombs to make player's life much more difficult. Have fun :)",
];

const handle_step = (step: number) => {
  const el = document.getElementById("comment");
  if (el) el.innerText = dict[step];
};

const AboutPage = () => {
  return (
    <div className={s.page_container}>
      <p className={s.intro}>A long time ago in a galaxy far, far away....</p>
      <h1 className={s.title}>WAY OF JEDI</h1>
      <p className={s.text}>
        The time has come to be difficult. Aims become more complex, knowledge
        requires more time to be learnt. However, a person's forces are too
        limited to have time for everything. Moreover, a person could just give
        up because of education difficulies and having no experience. How to
        succeed everywhere? What is the best way in a field?
      </p>
      <p className={s.text}>
        Finally, a lot of people have started teaching each other and share
        their experience. Additionally, they have created a lot of road maps
        provided with commets to make achievement process much easier.
      </p>
      <p className={s.text}>
        Now everyone can start their own way in any field and reach the JEDI
        level at it.
      </p>
      <h1 className={s.title}>MISSION</h1>
      <h2 className={s.subtitle2}>
        Make achieving whatever you want much clearer and simpler using people's
        experience
      </h2>
      <h1 className={s.title}>HOW IT WORKS?</h1>
      <p className={s.text}>
        We suggest everyone making a road map in any necessary field that makes
        achieving process more predictable. A lot of possible obstacles will be
        foreseen in the beginning of a person's way that will allow to prepare
        for them.
      </p>
      <p className={s.text}>
        After reaching every checkpoint on the map, we suggest leaving a comment
        in order to describe details of the progress.
      </p>
      <p className={s.text}>
        Finally, everyone can publish their road map {"(WAY OF JEDI)"} to allow
        others to use it.
      </p>
      <h2 className={`${s.subtitle2} ${s.underlined_text}`}>
        In this way, we help each other move in the right direction to achieve
        something.
      </h2>
      <h1 className={s.title}>EXAMPLE</h1>
      <h2 className={`${s.subtitle} ${s.glowing_text}`}>GAMEDEV PADAVAN WAY</h2>
      <div className={s.example_div}>
        <ul className={s.list}>
          <li className={s.list_item}>
            <Button
              text="Download Unity and C# tools"
              handleClick={handle_step}
              arg={0}
            />
          </li>
          <li className={s.list_item}>
            <Button
              text="Create new Snake project"
              handleClick={handle_step}
              arg={1}
            />
          </li>
          <li className={s.list_item}>
            <Button
              text="Create first objects"
              handleClick={handle_step}
              arg={2}
            />
          </li>
          <li className={s.list_item}>
            <Button text="Add logic" handleClick={handle_step} arg={3} />
          </li>
          <li className={s.list_item}>
            <Button
              text="Add unique features"
              handleClick={handle_step}
              arg={4}
            />
          </li>
        </ul>
        <div className={s.details_div}>
          <div className={s.comment_div}>
            <p className={s.text} id="comment"></p>
          </div>
          <div className={s.button_div}>
            <button className={s.mark}>
              <p className={s.text}>Mark Done</p>
            </button>
          </div>
        </div>
      </div>
      <h1 className={s.title}>DEVELOPER</h1>
      <div className={s.me_container}>
        <img className={s.me_image} src={Me} />
        <div className={s.me_description}>
          <h2 className={`${s.subtitle} ${s.glowing_text}`}>THE JEDI MASTER</h2>
          <p className={s.subtitle2}>Alexander Ganiev (Red Aulex)</p>
          <p className={s.me_text}>
            {">>"} I believe that together we can achieve a lot if we help each
            other and share our experience.
          </p>
        </div>
      </div>
      <p className={s.subtitle2}>MAY THE FORCE BE WITH YOU!</p>
    </div>
  );
};

export default AboutPage;
