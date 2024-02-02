import novik from "./assets/denis_novik.png";
import rest from "./assets/resss.png";
import devdinder from "./assets/devinder.png";
import shortly from "./assets/shortly.png";
import sowork from "./assets/sowork.png";
import frontiers from "./assets/frontiers.png";
import historicalSlider from "./assets/hitsoricalSlider.png"

export const learnEx = [
  {
    name: "Historical slider",
    desciption:
      "Красивый двойной слайдер со сложной круговой анимацией, написанный на GSAP",
    stack: ["REACT", "GSAP", "useGsap", "styled-components"],
    link: "https://historical-slider.vercel.app/",
    pic: historicalSlider
  },

  {
    name: "REST Countries",
    desciption:
      "Сайт со списком стран. Кажется скучным, но это не так! Есть смена тем, фильтрация, детальное окно по клику на карточку, получение стран соседей",
    stack: [
      "REACT",
      "TYPESCRIPT",
      "REDUX",
      "axios",
      "REST API",
      "styled-components",
      "react-router-dom",
    ],
    link: "https://rest-countries-silk.vercel.app/",
    pic: rest,
  },
  {
    name: "DEVFINDER",
    desciption: "Сервис для поиска в GitHub. Работа с APIGitHub",
    stack: ["REACT", "TYPESCRIPT", "REST API", "axios", "styled-components"],
    link: "https://xiuiskariot.github.io/devfinder/",
    pic: devdinder,
  },
  {
    name: "SHORTLY",
    desciption:
      "Лендинг для сокращения ссылок. Милый одностраничник, который работает от апишки и выдает ссылки с коротком формате",
    stack: ["REACT", "JAVASCRIPT", "axios"],
    link: "https://dev-shortly.vercel.app/",
    pic: shortly,
  },
  {
    name: "Denis Novik Portfolio",
    stack: ["JAVASCRIPT", "HTML", "CSS-modules"],
    desciption:
      "Лендинг портфолио дизайнера. Полностью адаптирован, есть бургер меню с навигацией",
    link: "https://xiuiskariot.github.io/denis_novik_adoptive_edition/",
    pic: novik,
  },
];

export const realEx = [
  {
    name: "FRONTIERS",
    stack: ["REACT", "TYPESCRIPT"],
    desciption:
      "Лендинг для ивестиционной компании. Сделала динамический калькулятор на сайте без использования доп. библиотек",
    link: "https://frontiers.ru/",
    pic: frontiers,
  },
  {
    name: "SOWORK",
    link: "https://sowork.ru/",
    stack: ["REACT", "JAVASCRIPT", "SCSS", "scroll-trigger.js"],
    desciption:
      "Сайт для компании по аренде спецтехники. Сделала интересные скролл-эффекты с машинками",
    pic: sowork,
  },
];
