import s from "./Greeting.module.css";

export const Greeting = () => {
  return (
    <div className={s.greeting}>
      <h2 className={s.greeting_phrase}>Привет! Я</h2>
      <h1 className={s.greeting_name}>Ксюша Воронина</h1>
      <p className={s.greeting_prof}>&gt; Front-end developer</p>

      {/*eslint-disable-next-line */}
      <p className={s.greeting_comment}>// Вы можете найти меня на GitHub</p>
      <p className={s.greeting_link}>
        <span className={s.violet}>const </span>
        <span className={s.green}>githubLink </span>
        {/*eslint-disable-next-line */}
        <span className={s.white}> = </span>
        <a href="https://github.com/xiuiskariot" className={s.orange}>
          "https://github.com/xiuiskariot"
        </a>
      </p>
      <p className={s.greeting_comment}>// Или написать в Telegram</p>
      <p className={s.greeting_link}>
        <span className={s.violet}>const </span>
        <span className={s.green}>telegramLink </span>
        {/*eslint-disable-next-line */}
        <span className={s.white}> = </span>
        <a href="https://t.me/uhoju" className={s.orange}>
          "https://t.me/uhoju"
        </a>
      </p>
      <p className={s.greeting_comment}>// Или оставить заявку</p>
      <a  href="#contacts">
        Перейти в форму
      </a>
    </div>
  );
};
